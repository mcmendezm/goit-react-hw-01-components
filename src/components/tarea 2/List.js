import React from 'react';
import data from './data.json'

const List = () => {
    return (
        <div>
            <ul className="stat-list">
                {data.map((data) => (
                    <li className="item" key={data.id} style={data.style}>
                        <span className="label">{data.label}</span><br></br>
                        <span className="percentage">{data.percentage}%</span>
                    </li>
                ))}
            </ul>
            </div>
    )
}

export default List