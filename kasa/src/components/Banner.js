import './../styles/Banner.css';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function Banner() {
    const { pathname } = useLocation()
    return <div className="kasa-banner">
        <figure className='figure_logo'>
            <img src={logo} alt='logo'></img>
            </figure>
        <nav className='lien-pages-box'>
            <Link to='/' className='nav_link' id='accueil' style={{ textDecoration: pathname === '/' ? 'underline' : 'none' }}>Accueil</Link>
            <Link to='/propos' className='nav_link' id='propos' style={{ textDecoration: pathname === '/propos' ? 'underline' : 'none' }}>A Propos</Link>
        </nav>
    </div>
}

export default Banner