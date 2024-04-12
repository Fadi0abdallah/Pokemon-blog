import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const PokemonResistance = () => {
    const [pokemonsResistance, setPokemonsResistance] = useState([])
    const { pokemonResistance } = useParams()
    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/resistance/" + pokemonResistance)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPokemonsResistance(data)
            })
    })
    return (
        <section>
            {pokemonsResistance.map((pokemons) => {
                return (
                    <article key={pokemons.name}>
                        <h2> <Link to={`/poke-information/${pokemons.name}`}>{pokemons.name}</Link></h2>
                        <img src={pokemons.image} alt={pokemons.name} />

                        <div className="stats">
                            <h2>STATS</h2>
                            <h3>HP : {pokemons.stats.HP}</h3>
                            <h3>Attack : {pokemons.stats.attack}</h3>
                            <h3>Defense : {pokemons.stats.defense}</h3>
                            <h3>Special_attack : {pokemons.stats.special_attack}</h3>
                            <h3>Special_defense : {pokemons.stats.special_defense}</h3>
                            <h3>Speed : {pokemons.stats.speed}</h3>

                        </div>
                        <div className="type">

                            {pokemons.apiTypes.map((typeElement) => {
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

            })}

        </section>
    )

}
export default PokemonResistance