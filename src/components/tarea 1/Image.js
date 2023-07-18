import React from 'react';
import user from './user.json';

const Image = () => {
    return (
        <div>
        <img
          src={user.avatar}
          alt="User avatar"
          className="avatar"
        />
        </div>
    )
}

export default Image