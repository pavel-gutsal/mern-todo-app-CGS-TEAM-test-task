import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles/GlobalStyles';
import { theme } from './Theme/Theme';
import { App } from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </HashRouter>
  </Provider>
);
