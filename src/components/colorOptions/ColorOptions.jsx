import React, { useState } from 'react';
import { ColorButton, ColorOptionsContainer, Label } from './ColorOptions.style';
import { handleKeyDown } from '../../utils';

function ColorOptions({ options, onChange }) {
  const [selectedOption, setSelectedOption] = useState('sky');

  const handleColorSelect = (color) => {
    setSelectedOption(color);
    onChange(color);
  };

  return (
    <div>
      <Label htmlFor="color-options">
        Colores:
        <ColorOptionsContainer id="color-options">
          {options.map((color) => (
            <ColorButton
              key={color.label}
              color={color.label}
              isSelected={selectedOption === color.value}
              onClick={() => handleColorSelect(color.value)}
              onKeyUp={(event) => handleKeyDown(event, () => handleColorSelect(color.value))}
              tabIndex="0"
              aria-checked={selectedOption === color.value}
            />
          ))}
        </ColorOptionsContainer>
      </Label>
    </div>
  );
}

export default ColorOptions;
