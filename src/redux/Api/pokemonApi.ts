import { createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

interface AllPokemon{
  results:[{name:string}]
}

interface PokemonDetail{
  name:string,
  sprites:{front_default:string},
  height:number,
  weight:number,
  types:[{type:{name:string}}],
  stats:[{base_stat:number,stat:{name:string}}]
}

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
      getAllPokemonNames :builder.query<AllPokemon,[]>({
        query: () => "pokemon?limit=100000&offset=0",
      }),
      getPokemonByName: builder.query<PokemonDetail,{}>({
        query: (name) => `pokemon/${name}`,
      }),
    }),
  })

  export const { useGetPokemonByNameQuery,useGetAllPokemonNamesQuery } = pokemonApi

