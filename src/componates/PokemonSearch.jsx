import { useState } from "react"
import { Link } from "react-router-dom"
// import { useParams } from "react-router-dom"

const PokemonSearch = () => {
    const [searchPokemon, setSearchPokemon] = useState(null)
    // const { pokemonsName } = useParams()


    const namePokemonsSearch = (event) => {
        event.preventDefault()
        const searchNameOfPokemon = event.target.changePokemon.value;
        fetch("https://pokebuildapi.fr/api/v1/pokemon/" + searchNameOfPokemon)
            .then((respons) => {
                if (respons.status === 200) {
                    return respons.json();
                } else {
                    return false
                }

            })


            .then((data) => {
                setSearchPokemon(data)

            })
    }


    return (
        <section>
            <div>
                <form onSubmit={namePokemonsSearch}>
                    <label >Search the Pokemon:</label>
                    <input type="text" name="changePokemon" />
                    <input type="submit"></input>
                </form>

            </div>
            {searchPokemon === false && <h1> Your Pokemon Not Existing</h1>}
            {searchPokemon &&
                <article >
                    <h1>{searchPokemon.name}</h1>
                    <img src={searchPokemon.image} alt={searchPokemon.name} />
                    <div className="stats">
                        <h2>STATS</h2>
                        <h3>HP : {searchPokemon.stats.HP}</h3>
                        <h3>Attack : {searchPokemon.stats.attack}</h3>
                        <h3>Defense : {searchPokemon.stats.defense}</h3>
                        <h3>Special_attack : {searchPokemon.stats.special_attack}</h3>
                        <h3>Special_defense : {searchPokemon.stats.special_defense}</h3>
                        <h3>Speed : {searchPokemon.stats.speed}</h3>

                    </div>
                    <div className="type">

                        {searchPokemon.apiTypes.map((typeElement) => {
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
                </article>}



        </section>
    )
}
export default PokemonSearch