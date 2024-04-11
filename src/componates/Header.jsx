import { Link } from "react-router-dom"

const Header = () => {
    console.log('header')
    return (
        <header>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="pokempnLogo" />
            <button><Link to="/">Home Page</Link></button>


        </header>

    )
}
export default Header