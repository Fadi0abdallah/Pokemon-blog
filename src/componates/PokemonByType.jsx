import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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
            {
                pokemonByT.map((pokemon) => {
                    return (
                        <article key={pokemon.name}>
                            <h1>{pokemon.name}</h1>
                            <img src={pokemon.image} alt={pokemon.name} />
                            <h1> TYPE</h1>
                            {pokemon.apiTypes.map((typeElement) => {
                                return (
                                    <>
                                        <div className="type" key={typeElement.name}>

                                            <h2>{typeElement.name}</h2>

                                        </div>
                                        <img src={typeElement.image} alt={typeElement.name} />
                                    </>
                                )

                            })}
                        </article>

                    )

                })

            }
        </section>

    )
}
export default PokemonByType