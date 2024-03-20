import React, { StrictMode } from 'react';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { createRoot } from 'react-dom/client';
import { StyledEngineProvider, CssBaseline } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';

import { theme } from '../src/utils/ui/theme';

const container = document.getElementById('root')!;
const root = createRoot(container);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:5000/graphql',
});

root.render(
  <StyledEngineProvider injectFirst>
    <CssBaseline />
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <StrictMode>
          <BrowserRouter>
            <ApolloProvider client={client}>
              <App />
            </ApolloProvider>
          </BrowserRouter>
        </StrictMode>
      </StyledThemeProvider>
    </MaterialThemeProvider>
  </StyledEngineProvider>,
);
