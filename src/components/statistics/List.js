import React from 'react';
import data from './data.json';
import styled from 'styled-components';

const List = () => {
  const UlList = styled.ul`
    list-style-type: none;
    display: flex;
    padding: 0;
    margin-bottom: 0;
    & p {
      font-size: 12px;
    }
    & span {
      font-size: 20px;
    }
  `;
  const LiList = styled.li`
    padding: 15px;
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  `;
  return (
    <div>
      <UlList>
        {data.map(data => (
          <LiList key={data.id} style={data.style}>
            <p className="label">{data.label}</p>
            <br></br>
            <span className="percentage">{data.percentage}%</span>
          </LiList>
        ))}
      </UlList>
    </div>
  );
};

export default List;
