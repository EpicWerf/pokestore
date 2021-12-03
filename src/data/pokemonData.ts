import { Pokemon } from "../types/Pokemon.types"

const mockedPokemon: Pokemon[] = [
	{
		key: "001",
		name: "Pikachu",
		imgUrl:
			"https://cdn.vox-cdn.com/thumbor/e4KRzS--UsuixA2G8TOCwJ-O024=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/6839749/pokemon.0.png",
	},
	{
		key: "002",
		name: "Squirtle",
		imgUrl:
			"https://cdn.vox-cdn.com/thumbor/e4KRzS--UsuixA2G8TOCwJ-O024=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/6839749/pokemon.0.png",
	},
	{
		key: "003",
		name: "Charmander",
		imgUrl:
			"https://cdn.vox-cdn.com/thumbor/e4KRzS--UsuixA2G8TOCwJ-O024=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/6839749/pokemon.0.png",
	},
]

export const getPokemons = () => mockedPokemon;

