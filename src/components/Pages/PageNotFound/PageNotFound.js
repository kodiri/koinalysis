import React from 'react';
import bullBear_img from './Images/bullBear.jpeg';

const Error = () => {
    return (
        <div className='textbox-main'>
            <br />
             <img src={bullBear_img} alt='Sleeping leopard' /> 
            <p>Oops... The page you are looking for does not exist  &nbsp;:)</p>
        </div>
    );
};

export default Error;
