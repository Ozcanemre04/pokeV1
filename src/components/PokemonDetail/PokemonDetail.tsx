import React from 'react'
import { useSelector } from 'react-redux'
import { useGetPokemonByNameQuery } from '../../redux/Api/pokemonApi'
import type { RootState } from '../../redux/store/store'
import "../PokemonDetail/pokemonDetail.scss"
import {MdOutlineCatchingPokemon} from 'react-icons/md'

const PokemonDetail = () => {
    const SearchValue = useSelector((state:RootState)=>state.search.search)
    const {data:pokemonByName,isLoading,isError,error} = useGetPokemonByNameQuery(SearchValue)

  return (
    <>
    {isLoading===true&&
     <div><MdOutlineCatchingPokemon/></div>
     }
     {isError === true&&
     <div className='not-found'>
      <div>
       <h2>Not Found!</h2>
      </div>
     </div>
     }
    <div className='pokemon-detail'>

      <div className='left-side'>
      <div className='name'>
      <b>Name</b>
      <h2>{pokemonByName?.name}</h2>
      </div>
        <div className='type'>
          <b>Type</b>
          {pokemonByName?.types?.map((types,index)=>(
            <div key={index}>
              <p className={types?.type?.name}>{types?.type?.name}</p>
            </div>
          ))}
        </div>
    
      <div className='weight'>
       <b>Weight</b>
      <p>{pokemonByName?.weight}</p>
      </div>
      <div className="height">
      <b>Height</b>
      <p>{pokemonByName?.height}</p>
      </div>
      </div>

      <div className='middle-side'>
      <img src={pokemonByName?.sprites?.front_default} alt={pokemonByName?.name} />
      </div>

      <div className='right-side'>
        {pokemonByName?.stats?.map((stat,index)=>(
          <div className='stat' key={index}>
            <p>{stat?.stat?.name}</p>
            <meter className={pokemonByName?.types[0]?.type.name}  max="255" value={stat?.base_stat}></meter>
          </div>
        ))}
      </div>

    </div>

    </>
  )
}

export default PokemonDetail