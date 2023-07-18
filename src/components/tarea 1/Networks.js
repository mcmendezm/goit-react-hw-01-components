import React from 'react';
import user from './user.json';

const Networks = () => {
    return (
        <div className="networks">
            <ul className="networks_list">
                <li className="networks_item">
                <span className="label">Followers</span>
                <h4 className="quantity">{user.stats.followers}</h4>
                </li>
                <li className="networks_item">
                <span className="label">Views</span>
                <h4 className="quantity">{user.stats.views}</h4>
                </li>
                <li className="networks_item">
                <span className="label">Likes</span>
                <h4 className="quantity">{user.stats.likes}</h4>
                </li>
            </ul>
        </div>
    )
}

export default Networks