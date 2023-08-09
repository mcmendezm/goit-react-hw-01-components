import React from 'react';
import user from './user.json';

const Info = () => {
  return (
    <div>
      <h2 className="name">{user.username}</h2>
      <p className="tag">@{user.tag}</p>
      <p className="location">{user.location}</p>
    </div>
  );
};

export default Info;
