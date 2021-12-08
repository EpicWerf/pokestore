import { useEffect, useState } from "react"
import { DynamoPokemon, Pokemon } from "../types/Pokemon.types"
import {
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonIcon,
	IonImg,
	IonItem,
	IonLabel,
	IonPage,
	IonRefresher,
	IonRefresherContent,
	IonRow,
	IonTitle,
	IonToggle,
	IonToolbar,
} from "@ionic/react"
import "./Home.css"
import { moonOutline } from "ionicons/icons"
import axios from "axios"

const Home: React.FC<{
	darkMode: boolean
	setDarkMode: Function
}> = (props) => {
	const { darkMode, setDarkMode } = props
	const [allPokemon, setAllPokemon] = useState<DynamoPokemon[]>([])

	const fetchPokemon = async () => {
		const response: DynamoPokemon[] = (
			await axios.post(
				"https://n80qsv2ckj.execute-api.us-east-1.amazonaws.com/Prod"
			)
		).data

		console.log(response)

		setAllPokemon(response)
	}

	useEffect(() => {
		fetchPokemon()
	}, [])

	const refresh = (e: CustomEvent) => {
		setTimeout(() => {
			e.detail.complete()
		}, 3000)
	}

	return (
		<IonPage id="home-page" className="ion-text-center">
			<IonHeader>
				<IonToolbar>
					<IonTitle style={{ marginLeft: "200px" }}>Pokestore: Group 2-7</IonTitle>
					<IonItem slot="end">
						<IonIcon slot="start" icon={moonOutline}></IonIcon>
						<IonLabel>Dark Mode</IonLabel>
						<IonToggle checked={darkMode} onClick={() => setDarkMode(!darkMode)} />
					</IonItem>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonCard>
					<IonRefresher slot="fixed" onIonRefresh={refresh}>
						<IonRefresherContent></IonRefresherContent>
					</IonRefresher>
					<IonHeader collapse="condense">
						<IonToolbar>
							<IonTitle size="large">Pokestore: Group 2-7</IonTitle>
						</IonToolbar>
					</IonHeader>

					<IonGrid>
						<IonRow className="flex">
							<IonImg
								className="logoImg"
								src="https://vignette.wikia.nocookie.net/vsbattles/images/1/14/Logo_Pokemon.png/revision/latest?cb=20160807031552"
							/>
						</IonRow>
						<IonRow className="flex">
							{allPokemon.map((pokemon) => (
								<IonCol size="3" size-lg >
									<IonCard className="pokecard" >
										<img src={pokemon.pokemonImgUrl} alt={`Card with ${pokemon.pokemonName}`} />
										<IonCardHeader>
											<IonCardTitle key={pokemon.pokemonId}>{pokemon.pokemonName}</IonCardTitle>
										</IonCardHeader>
									</IonCard>
								</IonCol>
							))}
						</IonRow>
					</IonGrid>
				</IonCard>
			</IonContent>
		</IonPage>
	)
}

export default Home
