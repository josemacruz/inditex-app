import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from '../services/store/store';
import router from './router';
import { GlobalStyle, theme } from './globalStyles';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>

    </Provider>
  );
}

export default App;
