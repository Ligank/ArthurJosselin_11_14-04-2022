import './../styles/Banner.css';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

function Banner() {
    return <div className="kasa-banner">
        <figure className='figure_logo'>
            <img src={logo} alt='logo'></img>
            </figure>
        <nav className='lien-pages-box'>
            <Link to='/' className='nav_link' id='accueil'>Accueil</Link>
            <Link to='/propos' className='nav_link' id='propos'>A Propos</Link>
        </nav>
    </div>
}

export default Banner