import '../styles/Collapse.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import React from 'react';
import useCollapse from 'react-collapsed';

function Collapse({ title, text}) {
    const config = {
        duration: 1000
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
    return <div className="propos-box">

        <div className="collapse">
            <div className="title_arrow" {...getToggleProps()}>
                {isExpanded ? title : title}
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div {...getCollapseProps()}>
                <p className='text_propos'>{text}</p>
            </div>
        </div>
    </div>
}
Collapse.propTypes = {
    title: PropTypes.string,
}

export default Collapse
