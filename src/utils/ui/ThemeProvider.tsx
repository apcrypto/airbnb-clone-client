import React, { FC, ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/material';
import styled, {
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';
import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';

import { theme } from './theme';

const ApplicationWrapper = styled.div`
  height: 100vh;
`;

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * This Provider should only be rendered once at the root of the application
 * Gives access to themes for material-UI and styled-components
 * Sets baselineCSS
 *
 * @param children React.ReactNode
 */
const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <CssBaseline />
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <ApplicationWrapper>{children}</ApplicationWrapper>
      </StyledThemeProvider>
    </MaterialThemeProvider>
  </StyledEngineProvider>
);

export default ThemeProvider;
