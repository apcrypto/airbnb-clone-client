import React from 'react';
import { CssBaseline } from '@mui/material';
import { StylesProvider } from '@mui/styles';
import styled, {
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';
import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { theme } from '../src/utils/ui/theme';

const ThemeDecorator = storyFn => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          {storyFn()}
        </LocalizationProvider>
      </StyledThemeProvider>
    </MaterialThemeProvider>
  </StylesProvider>
);

export default ThemeDecorator;
