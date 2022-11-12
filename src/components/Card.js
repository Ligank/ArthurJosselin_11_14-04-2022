import '../styles/Card.css'
import PropTypes from 'prop-types'

function Card({ link, title, cover }) {
    return (
        <a href={link} className='location-box'>
            <figure className='box_img_location'>
                <img src={cover} alt = "cover_location" className='location_picture'></img>
            </figure>
			<div className ='text_box'>
				<p className='title-location'>{title}</p>
			</div>
        </a>
    )
}

Card.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
}
 
export default Card