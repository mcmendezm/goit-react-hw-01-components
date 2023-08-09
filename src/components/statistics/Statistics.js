import React from 'react';
import './data.json';
import Title from './Title';
import List from './List';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Statistics = ({ title, style }) => {
  const DivStatistics = styled.div`
    border: 1px solid #868282;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 70px;
    border-radius: 5%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background-color: white;
    width: 330px;
  `;
  return (
    <DivStatistics>
      <Title title={title}></Title>
      <List />
    </DivStatistics>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  style: PropTypes.string,
};
