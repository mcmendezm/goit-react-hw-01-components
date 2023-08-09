import React from 'react';
import Image from './Image';
import Info from './Info';
import Networks from './Networks';
import styled from 'styled-components';

const Profile = () => {
  const MyDiv = styled.div`
    display: flex;
    background-color: white;
    flex-direction: column;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    width: 200px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  `;
  return (
    <MyDiv>
      <Image />
      <Info />
      <Networks />
    </MyDiv>
  );
};

export default Profile;
