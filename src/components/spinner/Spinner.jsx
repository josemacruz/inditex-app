import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import SpinnerContainer from './Spinner.style';

function Spinner({ color, size }) {
  return (
    <SpinnerContainer>
      <ClipLoader color={color} size={size} />
    </SpinnerContainer>
  );
}

export default Spinner;
