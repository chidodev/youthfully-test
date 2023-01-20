import React, { useState } from 'react';

// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { useSettings } from '../hooks/useSettings';
import Search from '../layouts/components/search';

import { ImageData, Image } from 'src/utils/types';

import ImageCard from 'src/layouts/components/card';

const HomePage = () => {
  const { settings } = useSettings();
  const [imageDataList, setImageDataList] = useState<ImageData[]>([]);

  return (
    <>
      <Search />

      <Grid
        container
        spacing={6}
        sx={{
          marginTop: 10,
          ...{
            '@media (max-width:600px)': { marginTop: 0 },
          },
        }}
      >
        {imageDataList.map((card: ImageData, index: number) => (
          <Grid key={index} item xs={12} md={4}>
            <ImageCard {...card} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomePage;
