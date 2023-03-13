import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
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
