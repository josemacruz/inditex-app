import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { GlobalStyle, theme } from './globalStyles';
import store from '../services/store/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>

    </Provider>
  );
}

export default App;
