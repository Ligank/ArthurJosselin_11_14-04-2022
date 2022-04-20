import '../styles/Error404.css'
import Banner from "../components/Banner"
import Footer from '../components/Footer';


function Error404() {
    return <div className="Error">
       <Banner />
       <div className='all_text'>
        <div className='error_box'>
            <h1 className='text_error'>404</h1>
            <h3 className='text_error2'>Oups! La page que vous demandez n'existe pas.</h3>
        </div>
        <a href="/" className='lien_error'>Retourner sur la page d’accueil</a>
       </div>
       <Footer />
        
    </div>
}

export default Error404