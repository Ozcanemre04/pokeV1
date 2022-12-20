import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import {MdOutlineCatchingPokemon} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { useGetAllPokemonNamesQuery } from '../../redux/Api/pokemonApi'
import { searchForFilter } from '../../redux/Slice/SearchSlice'
import '../search/search.scss';

const Search = () => {
  const [searchInput,setSearchInput] = useState('')
  const {data:allPokemon} = useGetAllPokemonNamesQuery([])
  const dispatch = useDispatch()
 
  
   const autoComplete = allPokemon?.results?.filter((item)=>{
    if(searchInput ===''){
      return ""
    }
   else{
    const lowerCaseSearch = searchInput.toLowerCase()
    return item.name.toLowerCase().startsWith(lowerCaseSearch)
   }})

function searchPokemon(){
  if(searchInput===""){
    console.log('empty'); 
  }
  dispatch(searchForFilter(searchInput))
  setSearchInput('')
}

  return (
    <div className='search-container'>
     <div className='search'>
        <input type="text" value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}} />
        <button onClick={()=>{searchPokemon()}}><FaSearch/></button>
     </div>
     <div className='autocomplete'>
           {autoComplete?.map((item,index)=>(
              <div key={index} className='all-pokemons'>
                <MdOutlineCatchingPokemon style={{color:'red'}} className='pokeball'/>
                <p onClick={(e)=>{setSearchInput((e.target as HTMLParagraphElement).innerText)}}>{item?.name}</p>
              </div>
           ))} 
     </div>

     
      
    </div>
  )
}

export default Search
