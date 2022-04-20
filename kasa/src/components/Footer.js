import '../styles/Footer.css'
import logo from '../assets/logo - white.svg'

function Footer() {
    return <div className="footer">
        <figure className='figure-logo'><img src={logo} alt='logo' className='logo-img'></img></figure>
        <h4>© 2020 Kasa. All rights reserved</h4>
    </div>
}

export default Footer