import '../styles/Tags.css'
import PropTypes from 'prop-types'

function Tags({ tag }) {
    return (
        <p className='tag_card'>{tag}</p>
    )
}

Tags.propTypes = {
    tag: PropTypes.string
}
 
export default Tags