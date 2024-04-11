
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Page/HomePage'
import PokemonsDetailePage from './Page/pokemonsDetailePage'
import PokemonByTypePage from './Page/PokemonByTyprPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/poke-detail/:pokemonId" element={<PokemonsDetailePage />} />
          <Route path="/poke-types/:pokemonType" element={<PokemonByTypePage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
