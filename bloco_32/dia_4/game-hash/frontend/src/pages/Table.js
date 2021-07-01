import React, { useContext } from 'react';
import { Context } from '../context';
import Square from '../components/Square';
import client from '../utils/socktIoClient';
import './square.css';

function Table() {
  const { tableSquare } = useContext(Context);
  
  return (
    <div className='table-square'>
      { tableSquare.map((item) =>
        <Square key={item.position} square={item} /> )}
    </div>
  );
}

export default Table;