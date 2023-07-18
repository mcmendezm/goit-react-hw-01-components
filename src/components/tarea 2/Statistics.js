import React from 'react';
import './data.json'
import Title from './Title';
import List from './List';
import PropTypes from "prop-types";


const Statistics = ({title, style}) => {
    return (
        <div className='statistics'>
            <Title title={title}></Title>
            <List/>
        </div>
    )
}

export default Statistics

Statistics.propTypes = {
  title: PropTypes.string,
  style: PropTypes.string
};