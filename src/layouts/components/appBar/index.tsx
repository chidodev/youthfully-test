// React Imports

// MUI Imports
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar';
import { ReactNode } from 'react';

interface Props {
  appBarContent?: (props?: any) => ReactNode;
}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  transition: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 6),
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
  minHeight: theme.mixins.toolbar.minHeight,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
  width: '100%',
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  padding: `${theme.spacing(0)} !important`,
  minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
  transition:
    'padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out, background-color .25s ease-in-out',
}));

const LayoutAppBar = (props: Props) => {
  // Props
  const { appBarContent: userAppBarContent } = props;

  // Hooks
  const theme = useTheme();

  return (
    <AppBar
      elevation={0}
      color="default"
      className="layout-navbar"
      position="static"
    >
      <Toolbar
        className="navbar-content-container"
        sx={{
          marginTop: 6,
          ...{
            '@media (min-width:1200px)': {
              marginTop: 8,
              maxWidth: `calc(1200px - ${theme.spacing(6)} * 2)`,
            },
            '@media (max-width:899px)': { marginTop: 2 },
          },
        }}
      >
        {(userAppBarContent && userAppBarContent(props)) || null}
      </Toolbar>
    </AppBar>
  );
};

export default LayoutAppBar;
