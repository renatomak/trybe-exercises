import React, { useState } from 'react';

const Square = (props) => {
  const { square } = props;

  const handleChange = () => {
    console.log(square);
  };

  return (
    <button type='button' className="square" onClick={ handleChange }>
    </button>
  );
}

export default Square;