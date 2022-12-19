import React from 'react'
import { useSelector } from 'react-redux'
import { useGetPokemonByNameQuery } from '../../redux/Api/pokemonApi'
import type { RootState } from '../../redux/store/store'
import "../PokemonDetail/pokemonDetail.scss"
const PokemonDetail = () => {
    const SearchValue = useSelector((state:RootState)=>state.search.search)
    const {data:pokemonByName,isLoading,isError} = useGetPokemonByNameQuery(SearchValue)

    
  
  return (
    <div>
      <img src={pokemonByName?.sprites.front_default} alt="" />
      <h2>{pokemonByName?.name}</h2>
    </div>
  )
}

export default PokemonDetail