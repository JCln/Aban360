import React, { FC } from 'react';
import ReactLoading from 'react-loading';
 
const Loading:FC<any> = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={97} width={95} className='loading__item'/>
);
 
export default Loading;