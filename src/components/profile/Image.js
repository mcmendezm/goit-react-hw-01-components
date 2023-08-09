import React from 'react';
import user from './user.json';
import styled from 'styled-components';

const Image = () => {
  const MyImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-top: 30px;
  `;
  return (
    <div>
      <MyImg src={user.avatar} alt="User avatar" />
    </div>
  );
};

export default Image;
