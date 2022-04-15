import '../styles/ProposImage.css'
import barre2 from '../assets/barre2.png'

function ProposImage() {
    return <div className="propos">
        <figure className='figure-barre'><img src={barre2} alt='barre' className='barre-img'></img></figure>
    </div>
}

export default ProposImage