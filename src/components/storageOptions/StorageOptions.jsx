import React, { useState } from 'react';
import { Container, Label, OptionButton } from './Storage.style';

function StorageOptions({ options, onChange }) {
  const [selectedOption, setSelectedOption] = useState('64GB');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <Container>
      <Label>Almacenamiento:</Label>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {options.map((option) => (
          <OptionButton
            key={option}
            isSelected={selectedOption === option}
            onClick={() => handleOptionChange(option)}
          >
            {option}
          </OptionButton>
        ))}
      </div>
    </Container>
  );
}

export default StorageOptions;
