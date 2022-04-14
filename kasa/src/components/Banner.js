import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    return <div className="kasa-banner">
        <figure className='figure-logo'><img src={logo} alt='logo' className='logo-img'></img></figure>
        <div className='lien-pages-box'>
            <a href='test' className='lien-pages'>Accueil</a>
            <a href='test' className='lien-pages'>A Propos</a></div>
    </div>
}

export default Banner