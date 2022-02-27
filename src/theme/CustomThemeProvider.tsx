import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import React, { PropsWithChildren } from 'react';
import { useAppSelector } from 'store/hooks';
import { darkModeColors, defaultColors } from './colors';

declare module '@material-ui/core/styles' {
  interface Theme {
    background: string;
    font: string;
  }

  interface ThemeOptions {
    background: string;
    font: string;
  }
}

const CustomThemeProvider: React.FC = (props: PropsWithChildren<{}>) => {
  const darkMode = useAppSelector((state) => state.darkMode);
  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: defaultColors.primary,
      },
    },
    background: darkMode ? darkModeColors.background : defaultColors.background,
    font: darkMode ? darkModeColors.font : defaultColors.font,
  });
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomThemeProvider;
