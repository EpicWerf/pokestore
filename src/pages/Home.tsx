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
	IonItem,
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
	// const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>({
	// 	key: "",
	// 	name: "",
	// 	imgUrl: "",
	// })

	// useIonViewWillEnter(() => {
	// 	const mons = getPokemons()
	// 	setAllPokemon(mons)
	// })

	const fetchPokemon = async () => {
		// Turn the response into JSON
		// const response = await fetch(`../data/pokemon.json`).then((response) =>
		// 	response.json()
		// )

		const response = getPokemons()

		// Set the state variable "pokemons" to the JSON response
		setAllPokemon(response)
		// setFilteredPokemon(response)

		// //Set the filters to the an array of pokemon types
		// let pokemonTypes = response.map((pokemon) => pokemon.type)
		// pokemonTypes = pokemonTypes.filter(
		// 	(pokemonType, index, self) => self.indexOf(pokemonType) === index
		// )
		// setFiltersList([...pokemonTypes])
	}

	//useEffect just means to run the "fetchPokemon" function when the page loads
	useEffect(() => {
		fetchPokemon()
	}, [])

	const refresh = (e: CustomEvent) => {
		setTimeout(() => {
			e.detail.complete()
		}, 3000)
	}

	return (
		<IonPage id="home-page">
			<IonHeader className="ion-text-center">
				<IonToolbar>
					<IonTitle>Pokestore: Group 2-7</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonRefresher slot="fixed" onIonRefresh={refresh}>
					<IonRefresherContent></IonRefresherContent>
				</IonRefresher>

				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Pokestore: Group 2-7</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonItem className="ion-text-center">
					<IonImg
						className="logoImg ion-text-center"
						src="https://vignette.wikia.nocookie.net/vsbattles/images/1/14/Logo_Pokemon.png/revision/latest?cb=20160807031552"
					/>
				</IonItem>

				<IonGrid>
					<IonRow>
						<IonCol size="3" size-sm>
							{/* array.map will go through all elements in an array and make a card out of them */}
							{allPokemon.map((pokemon) => (
								<IonCard className="pokecard">
									<img
										className="pokecardImg"
										src={pokemon.imgUrl}
										alt={`Card with ${pokemon.name}`}
									/>

									<IonCardHeader>
										<IonCardTitle>{pokemon.name}</IonCardTitle>
									</IonCardHeader>
									{/* <IonCardContent>
									Keep close to Nature's heart... and break clear away, once in awhile,
									and climb a mountain or spend a week in the woods. Wash your spirit
									clean.
								</IonCardContent> */}
								</IonCard>
							))}
						</IonCol>
						{/* <IonCol size="3" size-md>
							<Pokecard pokemon={allPokemon} />
						</IonCol> */}
						{/* 
						<IonCol size="3" size-sm>
						<Pokecard pokemon={allPokemon} />
						</IonCol>
						<IonCol size="3" size-sm>
						<Pokecard pokemon={allPokemon} />
					</IonCol> */}
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default Home
