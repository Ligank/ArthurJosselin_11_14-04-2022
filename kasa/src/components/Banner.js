import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    return <div className="kasa-banner">
        <figure className='figure-logo'><img src={logo} alt='logo' className='logo-img'></img></figure>
        <div className='lien-pages-box'>
            <div href='test' className='lien-pages' id='accueil'>Accueil</div>
            <div href='test' className='lien-pages' id='a_propos'>A Propos</div></div>
    </div>
}

export default Banner