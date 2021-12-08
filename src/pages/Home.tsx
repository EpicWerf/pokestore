import {
	ReactChild,
	ReactFragment,
	ReactPortal,
	useEffect,
	useState,
} from "react"
import { Pokemon } from "../types/Pokemon.types"
import {
	IonButton,
	IonCard,
	IonCardContent,
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
import { getPokemons } from "../data/pokemonData"
import { moonOutline } from "ionicons/icons"
import { log } from "console"

const Home: React.FC<{
	darkMode: boolean
	setDarkMode: Function
}> = (props) => {
	const { darkMode, setDarkMode } = props
	const [allPokemon, setAllPokemon] = useState<Pokemon[]>([])
	const [filtersList, setFiltersList] = useState<any>([])
	const [filteredDonuts, setFilteredDonuts] = useState<any>([])

	const fetchPokemon = async () => {
		const response = getPokemons()

		setAllPokemon(response)
		setFilteredDonuts(response)

		//Set the filters to the an array of donut types
		let donutTypes = response.map((donut) => donut.pokemonType)
		donutTypes = donutTypes.filter(
			(donutType, index, self) => self.indexOf(donutType) === index
		)

		setFiltersList([...donutTypes])
	}

	//this function is called when the user clicks on a filter
	const handleFilterChange = (event: any) => {
		event.preventDefault()

		//get the value of the filter
		console.log(event)
		console.log(event.target.innerHTML)
		const selectedOption = event.target.innerHTML

		//filter the donuts based on the selected option
		const copy = allPokemon.filter(
			(donut) => donut.pokemonType === selectedOption
		)

		//set the filtered array to the filtered copy of donuts
		//that way "donuts" remains the full list of donuts

		setFilteredDonuts([...copy])
	}

	//this function is called when the user clicks the "All" filter
	const resetFilters = () => {
		setFilteredDonuts([...allPokemon])
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
							<div style={{ marginBottom: "10px", marginTop: "10px" }}>
								<IonButton
									type="button"
									className="btn btn-success"
									onClick={resetFilters}
								>
									All
								</IonButton>
								{filtersList.map((filter: any) => (
									<IonButton
										type="button"
										onClick={handleFilterChange}
										key={filter}
										style={{ marginLeft: "10px" }}
										defaultValue={filter}
									>
										{filter}
									</IonButton>
								))}
							</div>
						</IonRow>
						<IonRow className="flex">
							{filteredDonuts.map(
								(pokemon: {
									pokemonImgUrl: string | undefined
									pokemonName:
										| boolean
										| ReactChild
										| ReactFragment
										| ReactPortal
										| null
										| undefined
									pokemonType:
										| boolean
										| ReactChild
										| ReactFragment
										| ReactPortal
										| null
										| undefined
								}) => (
									<IonCol size="3" size-lg>
										<IonCard className="pokecard">
											<img
												src={pokemon.pokemonImgUrl}
												alt={`Card with ${pokemon.pokemonName}`}
											/>
											<IonCardHeader>
												<IonCardTitle>{pokemon.pokemonName}</IonCardTitle>
												<IonCardContent>{pokemon.pokemonType}</IonCardContent>
											</IonCardHeader>
										</IonCard>
									</IonCol>
								)
							)}
						</IonRow>
					</IonGrid>
				</IonCard>
			</IonContent>
		</IonPage>
	)
}

export default Home
