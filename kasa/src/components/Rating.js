import '../styles/Rating.css'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Rating({ number }) {
    let stars = [];
    for(let i = 0; i < number; i++) {
        stars.push(<FontAwesomeIcon icon={faStar} className='starRed' key={i}/>);
    }
    for (let j = 5 - number; j > 0; j--) {
        stars.push(<FontAwesomeIcon icon={faStar} className='starGrey' key={j + 5}/>);
    }
    return stars;
}

Rating.propTypes = {
    number: PropTypes.string.isRequired
}
 
export default Rating