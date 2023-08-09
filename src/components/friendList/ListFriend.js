import React from 'react';
import FriendListItem from './FriendListItem';
import friends from './friends.json';
import styled from 'styled-components';

const ListFriend = () => {
  const DivListFriend = styled.div`
    margin-top: 90px;
  `;
  return (
    <DivListFriend>
      <ul>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </DivListFriend>
  );
};

export default ListFriend;
