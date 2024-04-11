import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const PokemonsDetaile = () => {
    const { pokemonId } = useParams("")
    const [pokemon, setPokemon] = useState(null)
    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokemonId)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPokemon(data)
            })
    }, [])
    console.log('test')
    return (
        <section>
            {
                pokemon ? (
                    <article>
                        <h1>{pokemon.name}</h1>
                        <img src={pokemon.image} alt={pokemon.name} />
                    </article>
                ) : (
                    <h2>watiing</h2>
                )
            }
        </section>
    )

}
export default PokemonsDetaile