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
            <div className="section">
                {
                    pokemons ? (
                        <>
                            {pokemons.map((pokemon) => {
                                return (
                                    <article key={pokemon.id}>

                                        <h2> <Link to={`/poke-information/${pokemon.name}`}>{pokemon.name}</Link></h2>

                                        <img src={pokemon.image}></img>
                                        <h3> <Link to={`/poke-detail/${pokemon.id}`}>Le cart de Pokemons</Link></h3>
                                        <h2> TYPE</h2>

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
                            })}
                        </>
                    )




                        : (
                            <div className="tourco">
                                <img className="tour" src="https://images.gameinfo.io/pokemon/256/p25f310s1.png"></img>
                                <h2>Waiting ...</h2>

                            </div>

                        )
                } </div>


        </section>
    )
}
export default PokemonPage