import React from 'react'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Arrow(props) {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;

    return <div style={{margin: "32px", color: "whitesmoke"}} onClick={clickFunction}>{icon}</div>;
}

export default Arrow