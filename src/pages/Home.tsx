import { useEffect, useState } from "react"
import { Pokemon } from "../types/Pokemon.types"
import {
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonImg,
	IonPage,
	IonRefresher,
	IonRefresherContent,
	IonRow,
	IonTitle,
	IonToolbar,
} from "@ionic/react"
import "./Home.css"
import { getPokemons } from "../data/pokemonData"

const Home: React.FC = () => {
	const [allPokemon, setAllPokemon] = useState<Pokemon[]>([])

	const fetchPokemon = async () => {
		const response = getPokemons()
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
			<IonHeader className="ion-text-center">
				<IonToolbar>
					<IonTitle>Pokestore: Group 2-7</IonTitle>
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
								<IonCol size="3" size-lg>
									<IonCard className="pokecard">
										<img src={pokemon.imgUrl} alt={`Card with ${pokemon.name}`} />
										<IonCardHeader>
											<IonCardTitle>{pokemon.name}</IonCardTitle>
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
