import React from 'react';
import { Container, Label, OptionButton } from './Storage.style';
import { handleKeyDown } from '../../utils/functions';

function StorageOptions({ selectedOption, options, onChange }) {
  const handleOptionChange = (option) => {
    onChange(option);
  };

  return (
    <Container>
      <Label>Almacenamiento:</Label>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {options.map((option) => (
          <OptionButton
            key={option.label}
            tabIndex="0"
            aria-label={`Selección de almacenamiento ${option.label}`}
            onKeyDown={(e) => handleKeyDown(e, () => handleOptionChange(option.value))}
            isSelected={selectedOption === option.value}
            onClick={() => handleOptionChange(option.value)}
            aria-checked={selectedOption === option.value}
          >
            {option.label}
          </OptionButton>
        ))}
      </div>
    </Container>
  );
}

export default StorageOptions;
