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
              key={color}
              color={color}
              isSelected={selectedOption === color}
              onClick={() => handleColorSelect(color)}
              onKeyUp={(event) => handleKeyDown(event, () => handleColorSelect(color))}
              tabIndex="0"
              aria-checked={selectedOption === color}
            />
          ))}
        </ColorOptionsContainer>
      </Label>
    </div>
  );
}

export default ColorOptions;
