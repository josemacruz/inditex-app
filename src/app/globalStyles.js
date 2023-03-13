import { createGlobalStyle } from 'styled-components';

export const theme = {
  primaryColor: '#8FBEDB',
  secondaryColor: '#EEE9DA',
  primaryText: '#000000',
  backgroundColor: '#FFFFFF',
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(p) => p.theme.backgroundColor};
    font-family: 'Source Sans Pro', sans-serif;

    ::-webkit-scrollbar {
      width: 7px;
    }
  
    ::-webkit-scrollbar-track {
      background-color: ${(p) => p.theme.secondaryColor};
    }
  
    ::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 3px;
    }
  
    ::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }
  }

  main {
    margin: 0px 200px 0px 240px;

    @media screen and (max-width: 600px) {
      margin: 0;
    }
  }
`;
