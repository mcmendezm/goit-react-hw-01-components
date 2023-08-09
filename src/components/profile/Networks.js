import React from 'react';
import user from './user.json';
import styled from 'styled-components';

const Networks = () => {
  const MyDivNetworks = styled.div`
    background-color: #ccc;
    padding: 0;
  `;
  const MyUl = styled.ul`
    display: flex;
    margin: 0 auto;
    padding: 0;
    justify-content: center;
  `;
  const MyLi = styled.li`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    border: 1px solid #868282;
    padding: 0 6px;
    border-radius: 5%;
  `;
  const MyH4 = styled.h4`
    margin: 0 auto;
    padding: 4px 0;
  `;

  return (
    <MyDivNetworks>
      <MyUl>
        <MyLi>
          <span className="label">Followers</span>
          <MyH4>{user.stats.followers}</MyH4>
        </MyLi>
        <MyLi>
          <span className="label">Views</span>
          <MyH4>{user.stats.views}</MyH4>
        </MyLi>
        <MyLi>
          <span className="label">Likes</span>
          <MyH4>{user.stats.likes}</MyH4>
        </MyLi>
      </MyUl>
    </MyDivNetworks>
  );
};

export default Networks;
