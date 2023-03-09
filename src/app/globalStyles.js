import { createGlobalStyle } from 'styled-components';

export const theme = {
  primaryColor: '#6096B4',
  secondaryColor: '#EEE9DA',
  primaryText: '#000000',
  backgroundColor: '#FFFFFF',
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(p) => p.theme.backgroundColor};
    font-family: beton-sans, sans-serif;
  }
`;
