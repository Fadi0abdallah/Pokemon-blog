
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Page/HomePage'
import PokemonsDetailePage from './Page/pokemonsDetailePage'
import PokemonByTypePage from './Page/PokemonByTyprPage'
import PokemonAllinofPage from './Page/PokemonAllinfoPage'
import PokemonResistancePage from './Page/PokemonResistancePage'
import PokemonByRandomPage from './Page/PokemonByRandomPage'
import SearchPokemonPage from './Page/SearchPokemonPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/poke-detail/:pokemonId" element={<PokemonsDetailePage />} />
          <Route path="/poke-types/:pokemonType" element={<PokemonByTypePage />} />
          <Route path="/poke-information/:pokemonName" element={<PokemonAllinofPage />} />
          <Route path="/pokemon-Random/" element={<PokemonByRandomPage />} />
          <Route path="/pokemon-resistance/:pokemonResistance" element={<PokemonResistancePage />} />
          <Route path="/poke-for-search" element={<SearchPokemonPage />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
