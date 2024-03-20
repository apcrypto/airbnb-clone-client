import { Preview } from '@storybook/react';
import ThemeDecorator from './themeDecorator';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

const preview: Preview = {
  parameters: {
    layout: 'padded', // https://storybook.js.org/docs/react/configure/story-layout#story-layout
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // i18n,
  },
  decorators: [ThemeDecorator],
};

export default preview;
