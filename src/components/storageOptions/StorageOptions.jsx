import React, { useState } from 'react';
import { Container, Label, OptionButton } from './Storage.style';

function StorageOptions({ options, onChange }) {
  const [selectedOption, setSelectedOption] = useState(0);

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
            key={option.label}
            isSelected={selectedOption === option.value}
            onClick={() => handleOptionChange(option.value)}
          >
            {option.label}
          </OptionButton>
        ))}
      </div>
    </Container>
  );
}

export default StorageOptions;
