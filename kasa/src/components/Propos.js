import '../styles/Propos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Propos() {
    return <div className="propos-box">
        <div className="categories">
            <div className="title_arrow">
                <h4>Fiabilité</h4>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>

        </div>
        <div className="categories">
            <div className="title_arrow">
                <h4>respect</h4>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>

        </div>
        <div className="categories">
            <div className="title_arrow">
                <h4>Service</h4>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>

        </div>
        <div className="categories">
            <div className="title_arrow">
                <h4>Responsabilité</h4>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>

        </div>
        
    </div>
}

export default Propos