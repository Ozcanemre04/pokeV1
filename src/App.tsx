import React from 'react';
import Header from './components/Header/Header';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import Search from './components/search/Search';
import "./sass/Global.scss"






function App() {
   
  return (
  <>
  <Header/>
  <section>
   <Search/>
   <PokemonDetail/> 
  </section>
  </>
  );
}

export default App;
