import { createGlobalStyle } from 'styled-components';

export const theme = {
  primaryColor: '#8FBEDB',
  secondaryColor: 'gold',
  primaryText: '#000000',
  backgroundColor: '#FFFFFF',
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(p) => p.theme.backgroundColor};
    font-family: 'Source Sans Pro', sans-serif;
    font-color: ${(p) => p.theme.primaryText};

    ::-webkit-scrollbar {
      width: 7px;
    }
  
    ::-webkit-scrollbar-track {
      background-color: ${(p) => p.theme.primaryColor};
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
    display: flex;
    margin: 0px 200px;
    flex-direction: column;
    align-items: stretch;

    @media screen and (max-width: 600px) {
      margin: 0;
    }
  
    @media screen and (min-width: 601px) and (max-width: 900px) {
      margin: 0px 50px;
    }
  
    @media screen and (min-width: 901px) and (max-width: 1200px) {
      margin: 0px 50px;
    }
  
    @media screen and (min-width: 1201px) and (max-width: 1500px) {
      margin: 0px 50px;
    }

  }
`;
