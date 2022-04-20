import '../styles/Banner.css'
import logo from '../assets/logo.svg'

function Banner() {
    return <div className="kasa-banner">
        <figure className='figure-logo'><img src={logo} alt='logo' className='logo-img'></img></figure>
        <div className='lien-pages-box'>
            <a href='/' className='lien-pages' id='accueil'>Accueil</a>
            <a href='/propos' className='lien-pages' id='a_propos'>A Propos</a></div>
    </div>
}

export default Banner