import '../styles/Collapse.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import {useState} from 'react'
import React, { useRef, useEffect } from 'react';

function Collapse({ title, text}) {

    //Etat booléen de la collapse
    function Open() {
        if (open === true) {
            setOpen(false)
            setClose(true)
        } else {
            setOpen(true)
            setClose(false)
        }   
    }
    const [open, setOpen]=useState(false)
    const [close, setClose]=useState(true)

    //récuperation de la taille du texte 
    const [height, setHeight] = useState(0)
    const ref = useRef(null)
    useEffect(() => {
        setHeight(ref.current.clientHeight)
      }, [])
    const newHeight = height + 10;

    
    return <div className="propos-box">
        <div className="collapse">
            <div className="title_arrow" onClick={Open}>
                {title}
                {open?<FontAwesomeIcon icon={faChevronUp} className='arrow' />:null}
                {close?<FontAwesomeIcon icon={faChevronDown} className='arrow' />:null}
            </div>
            <div className='text_box_collapse' style={{maxHeight: open? `${newHeight}px` : '0px' }}>
                <p className='text_propos' ref = { ref }>{text}</p>
            </div>
        </div>
    </div>
}
Collapse.propTypes = {
    title: PropTypes.string,
}

export default Collapse


