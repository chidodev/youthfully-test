import React, { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';

import { useSettings } from '../hooks/useSettings';
import Search from '../layouts/components/search';

import { ImageData } from 'src/utils/types';

import ImageCard from 'src/layouts/components/card';

const HomePage = () => {
  const { settings } = useSettings();
  const [imageDataList, setImageDataList] = useState<ImageData[]>([]);

  const fetchImageData = async () => {
    const response = await fetch(
      `${process.env.apiUrl}/${settings.section}/${settings.sort}/${settings.window}/${settings.page}?showViral=${settings.viral}`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.clientID}`,
        },
      },
    );

    const result: ImageData[] = await response.json();

    setImageDataList((prev) => [...prev, ...result]);
  };

  useEffect(() => {
    fetchImageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings]);

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
