import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const PokemonByType = () => {
    const { pokemonType } = useParams()
    const [pokemonByT, setPokemonByT] = useState([])
    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/" + pokemonType)
            .then((respons) => {
                return respons.json();

            })
            .then((data) => {
                setPokemonByT(data)

            })
    }, [pokemonType])
    return (
        <section>
            <h1><Link to={`/pokemon-Random/`}>Pokemon Random Page</Link></h1>

            {
                pokemonByT.map((pokemon) => {
                    return (
                        <article key={pokemon.name}>
                            <h2> <Link to={`/poke-information/${pokemon.name}`}>{pokemon.name}</Link></h2>

                            <img src={pokemon.image} alt={pokemon.name} />
                            <h1> TYPE</h1>
                            {pokemon.apiTypes.map((typeElement) => {
                                return (
                                    <>
                                        <div className="type" key={typeElement.name}>

                                            <h3> <Link className="hhh" to={`/poke-types/${typeElement.name}`}> {typeElement.name}</Link></h3>

                                            <img className="imageType" src={typeElement.image} alt={typeElement.name} />
                                            < h2 > <Link to={`/pokemon-resistance/${typeElement.name}`}>POKEMONS RESISTANCE</Link></h2>

                                        </div>

                                    </>
                                )


                            })}


                        </article>

                    )

                })

            }
        </section >

    )
}
export default PokemonByType