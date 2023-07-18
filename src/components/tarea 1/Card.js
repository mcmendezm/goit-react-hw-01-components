import React from 'react';
import Image from './Image';
import Info from './Info';
import Networks from './Networks';

const Card = () => {
    return (
        <div className='card'>
            <Image/>
            <Info />
            <Networks/>
        </div>
    )
}

export default Card