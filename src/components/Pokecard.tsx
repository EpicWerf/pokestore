import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
} from "@ionic/react"
import { Pokemon } from "../types/Pokemon.types"

interface PokecardProps {
	pokemon: Pokemon
}

const Pokecard: React.FC<PokecardProps> = ({ pokemon }) => {
	return (
		<IonCard>
			<IonCardHeader>
				<IonCardSubtitle>Card Subtitle</IonCardSubtitle>
				<IonCardTitle>Card Title</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>
				Keep close to Nature's heart... and break clear away, once in awhile, and
				climb a mountain or spend a week in the woods. Wash your spirit clean.
			</IonCardContent>
		</IonCard>
	)
}

export default Pokecard
