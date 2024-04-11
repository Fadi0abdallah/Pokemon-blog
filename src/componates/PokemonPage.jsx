import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

const PokemonPage = () => {
    const [pokemons, setPokemons] = useState(null)
    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon")
            .then((response) => {
                return response.json();

            })
            .then((data) => {
                setPokemons(data)
            })

    }, [])
    return (
        <section>

            <h1> list Of Pokemons</h1>
            {
                pokemons ? (
                    <>
                        {pokemons.map((pokemon) => {
                            return (
                                <article key={pokemon.id}>
                                    <h2>{pokemon.name}</h2>
                                    <h3  > <Link to={`/poke-detail/${pokemon.id}`}>Le cart de Pokemons</Link></h3>
                                </article>
                            )
                        })}
                    </>
                ) : (
                    <h2>watiing</h2>
                )
            }


        </section>
    )
}
export default PokemonPage