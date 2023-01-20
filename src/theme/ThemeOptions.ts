import { ThemeOptions } from '@mui/material';

import breakpoints from './breakpoints';

const themeOptions = (): ThemeOptions => {
  const themeConfig = {
    breakpoints: breakpoints(),
    shape: {
      borderRadius: 6,
    },
  };

  return themeConfig;
};

export default themeOptions;
