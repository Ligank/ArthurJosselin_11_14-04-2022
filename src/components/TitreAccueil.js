import '../styles/TitreAccueil.css'
import barre from '../assets/barre.png'

function Titre_accueil() {
    return <div className="TitreAccueil">
        <figure className='figure-barre'><img src={barre} alt='barre' className='barre-img'></img></figure>
        <div className='box-title'>
            <h1 className='title_img_home'>Chez vous, partout et ailleurs</h1>
        </div>
    
    </div>
}

export default Titre_accueil