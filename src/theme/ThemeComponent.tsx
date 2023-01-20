import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { ReactNode } from 'react';

// context
import { Settings } from 'src/utils/types';
// global styles
import GlobalStyling from './globalStyles';
import themeOptions from './ThemeOptions';

interface Props {
  settings: Settings;
  children: ReactNode;
}

const ThemeComponent = (props: Props) => {
  const { children } = props;

  const coreThemeConfig = themeOptions();

  const theme = createTheme(coreThemeConfig);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme) as any} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
