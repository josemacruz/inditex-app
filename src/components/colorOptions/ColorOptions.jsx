import React from 'react';
import { ColorButton, ColorOptionsContainer, Label } from './ColorOptions.style';
import { handleKeyDown } from '../../utils/functions';

function ColorOptions({ selectedOption, options, onChange }) {
  const handleColorSelect = (color) => {
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
              onKeyDown={(event) => handleKeyDown(event, () => handleColorSelect(color.value))}
              tabIndex="0"
              aria-label={`Selección de color ${color.label}`}
              aria-checked={selectedOption === color.value}
            />
          ))}
        </ColorOptionsContainer>
      </Label>
    </div>
  );
}

export default ColorOptions;
