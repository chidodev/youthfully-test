import { Theme } from '@mui/material/styles';

const GlobalStyles = (theme: Theme) => {
  return {
    // define global styles here
    '&:hover, &:focus': {
      backgroundColor:
        theme.palette.mode === 'light'
          ? '#C2C4D1 !important'
          : '#504B6D !important',
    },
  };
};

export default GlobalStyles;
