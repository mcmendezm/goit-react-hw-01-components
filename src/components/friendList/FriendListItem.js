import React from 'react';
import './friends.json';
import styled from 'styled-components';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const LiFriendList = styled.li`
    border: 1px solid #868282;
    border-radius: 5%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    list-style-type: none;
    margin-top: 20px;
    background-color: white;
    width: 280px;
    height: 150px;
    display: flex;
    align-items: center;
    & img {
      border-radius: 5%;
      max-width: 80px;
      max-height: 100px;
      margin-right: 25px;
    }
    & p {
      color: black;
      font-size: 30px;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    & span {
      border: 1px solid #868282;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin-left: 20px;
      margin-right: 20px;
    }
  `;
  return (
    <div>
      <LiFriendList>
        <span className={isOnline ? 'status online' : 'status offline'}></span>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
      </LiFriendList>
    </div>
  );
};

export default FriendListItem;
