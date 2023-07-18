import React from 'react';
import FriendListItem from './FriendListItem';
import friends from'./friends.json'


const ListFriend = () => {
    return (
        <div className='listFriend'>
            <ul className="friend-list">
                {friends.map((friend) => (
                    <FriendListItem
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ListFriend