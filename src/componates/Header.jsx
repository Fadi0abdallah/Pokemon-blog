import { Link } from "react-router-dom"

const Header = () => {
    console.log('header')
    return (
        <header>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="pokempnLogo" />
            <button><Link to="/">Home Page</Link></button>
            <h2><Link to={`/pokemon-Random/`}>Pokemon Random Page</Link></h2>
            <h2><Link to={`/poke-for-search/`}>Pokemon Search</Link></h2>

        </header>

    )
}
export default Header