import React from 'react';
import  './friends.json'


const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className='FriendListItem'>
            <li className="item-friend">
                <span className={isOnline ? 'status online' : 'status offline'}></span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
            </li>
        </div>
    )
}

export default FriendListItem