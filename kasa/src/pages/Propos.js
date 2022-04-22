import '../styles/Propos.css'
import Banner from "../components/Banner"
import ProposImage from "../components/ProposImage"
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';

function Propos() {
    return <div className="propos-box">
        <Banner />
        <ProposImage />
        <Collapse 
            key={`${'Fiabilité'}`}
            title='Fiabilité'
            text='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'>
        </Collapse>
        <Collapse 
            key={`${'Respect'}`}
            title='Respect'
            text='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'>
        </Collapse>
        <Collapse 
            key={`${'Service'}`}
            title='Service'
            text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.">
        </Collapse>
        <Collapse 
            key={`${'Sécurité'}`}
            title='Sécurité'
            text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.">
        </Collapse>
        <Footer />
        
    </div>
}

export default Propos