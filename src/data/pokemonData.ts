import { Pokemon } from "../types/Pokemon.types"

const mockedPokemon: Pokemon[] = [
	{
		pokemonName: "Squirtle",
		pokemonId: 7,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/007.png",
		pokemonType: "Water",
	},
	{
		pokemonName: "Wartortle",
		pokemonId: 8,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/008.png",
		pokemonType: "Water",
	},
	{
		pokemonName: "Caterpie",
		pokemonId: 10,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/010.png",
		pokemonType: "Bug",
	},
	{
		pokemonName: "Venusaur",
		pokemonId: 3,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/003.png",
		pokemonType: "Grass",
	},
	{
		pokemonName: "Ivysaur",
		pokemonId: 2,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/002.png",
		pokemonType: "Grass",
	},
	{
		pokemonName: "Spearow",
		pokemonId: 21,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/021.png",
		pokemonType: "Normal",
	},
	{
		pokemonName: "Kakuna",
		pokemonId: 14,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/014.png",
		pokemonType: "Bug",
	},
	{
		pokemonName: "Pidgeot",
		pokemonId: 18,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/018.png",
		pokemonType: "Normal",
	},
	{
		pokemonName: "Butterfree",
		pokemonId: 12,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/012.png",
		pokemonType: "Bug",
	},
	{
		pokemonName: "Blastoise",
		pokemonId: 9,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/009.png",
		pokemonType: "Water",
	},
	{
		pokemonName: "Charmander",
		pokemonId: 4,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/004.png",
		pokemonType: "Fire",
	},
	{
		pokemonName: "Weedle",
		pokemonId: 13,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/013.png",
		pokemonType: "Bug",
	},
	{
		pokemonName: "Pidgey",
		pokemonId: 16,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/016.png",
		pokemonType: "Normal",
	},
	{
		pokemonName: "Pidgeotto",
		pokemonId: 17,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/017.png",
		pokemonType: "Normal",
	},
	{
		pokemonName: "Charizard",
		pokemonId: 6,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/006.png",
		pokemonType: "Fire",
	},
	{
		pokemonName: "Raticate",
		pokemonId: 20,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/020.png",
		pokemonType: "Normal",
	},
	{
		pokemonName: "Rattata",
		pokemonId: 19,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/019.png",
		pokemonType: "Normal",
	},
	{
		pokemonName: "Bulbasaur",
		pokemonId: 1,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/001.png",
		pokemonType: "Grass",
	},
	{
		pokemonName: "Charmeleon",
		pokemonId: 5,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/005.png",
		pokemonType: "Fire",
	},
	{
		pokemonName: "Fearow",
		pokemonId: 22,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/022.png",
		pokemonType: "Normal",
	},
	{
		pokemonName: "Arbok",
		pokemonId: 24,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/024.png",
		pokemonType: "Poison",
	},
	{
		pokemonName: "Ekans",
		pokemonId: 23,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/023.png",
		pokemonType: "Poison",
	},
	{
		pokemonName: "Beedrill",
		pokemonId: 15,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/015.png",
		pokemonType: "Bug",
	},
	{
		pokemonName: "Metapod",
		pokemonId: 11,
		pokemonImgUrl: "https://2-7-pokemonbucket.s3.amazonaws.com/011.png",
		pokemonType: "Bug",
	},
]

export const getPokemons = () => mockedPokemon
