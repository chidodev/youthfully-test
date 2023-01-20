// ** React Imports
import { ReactNode } from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import AppBar from './components/appBar';

import AppBarContent from './components/appBar/AppBarContent';

interface Props {
  children: ReactNode;
}

const LayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex',
});

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
});

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const Layout = ({ children }: Props) => {
  return (
    <LayoutWrapper className="layout-wrapper">
      <MainContentWrapper className="layout-content-wrapper">
        <AppBar appBarContent={AppBarContent} />

        <ContentWrapper
          className="layout-page-content"
          sx={{
            ...{
              mx: 'auto',
              '@media (min-width:1200px)': { maxWidth: 1200 },
            },
          }}
        >
          {children}
        </ContentWrapper>
      </MainContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
