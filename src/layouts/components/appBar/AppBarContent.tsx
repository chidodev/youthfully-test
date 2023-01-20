import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import React from 'react';

const AppBarContent = () => {
  return (
    <>
      <Link href="">
        <Box
          component="img"
          sx={{
            marginRight: 10,
            display: { xs: 'none', md: 'flex' },
          }}
          alt="youthfully logo"
          src="images/logos/header-logo.png"
        />
      </Link>

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <Link href="#">
          <Box
            component="img"
            alt="youthfully logo"
            src="images/logos/logo-sm.png"
            sx={{ width: 64, marginTop: 1 }}
          />
        </Link>
      </Box>

      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {/* Menu here */}
      </Box>

      <Link
        target="_blank"
        href="https://app.youthfully.ca"
        sx={{
          textDecoration: 'none',
        }}
      >
        <Button
          sx={{
            width: '100px',
            padding: '15px',
            borderRadius: 100,
            background: `linear-gradient(0, #A9AFFC, #9155FD 65%)`,
          }}
          size="small"
          variant="contained"
        >
          Launch
        </Button>
      </Link>
    </>
  );
};
export default AppBarContent;
