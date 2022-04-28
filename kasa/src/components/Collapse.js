import '../styles/Collapse.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import {useState} from 'react'

function Collapse({ title, text}) {

    function Open() {
        if (show === true) {
            setShow(false)
            setOpen(false)
            setClose(true)
        } else {
            setShow(true)
            setOpen(true)
            setClose(false)
        }   
    }

    const [show, setShow]=useState(false)
    const [open, setOpen]=useState(false)
    const [close, setClose]=useState(true)

    return <div className="propos-box">

        <div className="collapse">
            <div className="title_arrow" onClick={Open}>
                {title}
                {open?<FontAwesomeIcon icon={faChevronUp} className='arrow' />:null}
                {close?<FontAwesomeIcon icon={faChevronDown} className='arrow' />:null}
            </div>
            {show?<div className='text_box_collapse close'>
                <p className='text_propos'>{text}</p>
            </div>:null
            }
            
        </div>
    </div>
}
Collapse.propTypes = {
    title: PropTypes.string,
}

export default Collapse


