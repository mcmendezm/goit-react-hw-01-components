import React from 'react';
import styled from 'styled-components';

const Title = ({ title }) => {
  const H2Title = styled.h2`
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  `;
  return (
    <div>
      <H2Title>{title}</H2Title>
    </div>
  );
};

export default Title;
