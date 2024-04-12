import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const PokemonAllInof = () => {
    const { pokemonName } = useParams()
    const [pokemon, setPokemon] = useState(null)
    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokemonName)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPokemon(data)
            })
    }, [])
    return (
        <section>
            <h1><Link to={`/pokemon-Random/`}>Pokemon Random Page</Link></h1>

            {
                pokemon && (
                    <article>
                        <h1> <Link to={`/poke-information/${pokemon.name}`}>{pokemon.name}</Link></h1>

                        <img src={pokemon.image} alt={pokemon.name} />
                        <h1> TYPE</h1>
                        <div className="stats">
                            <h2>STATS</h2>
                            <h3>HP : {pokemon.stats.HP}</h3>
                            <h3>Attack : {pokemon.stats.attack}</h3>
                            <h3>Defense : {pokemon.stats.defense}</h3>
                            <h3>Special_attack : {pokemon.stats.special_attack}</h3>
                            <h3>Special_defense : {pokemon.stats.special_defense}</h3>
                            <h3>Speed : {pokemon.stats.speed}</h3>

                        </div>
                        <div className="type">
                            {pokemon.apiTypes.map((typeElement) => {
                                return (
                                    <>
                                        <div className="type" key={typeElement.name}>

                                            <h3> <Link className="hhh" to={`/poke-types/${typeElement.name}`}> {typeElement.name}</Link></h3>

                                            <img className="imageType" src={typeElement.image} alt={typeElement.name} />

                                        </div>
                                    </>
                                )

                            })}
                        </div>
                    </article>

                )





            }
        </section>

    )
}
export default PokemonAllInof