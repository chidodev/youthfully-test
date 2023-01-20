import React, { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';

import { useSettings } from '../hooks/useSettings';
import Search from '../layouts/components/search';

import { ImageDataType } from 'src/utils/types';

import ImageCard from 'src/layouts/components/card';

const HomePage = () => {
  const { settings } = useSettings();
  const [imageDataList, setImageDataList] = useState<ImageDataType[]>([]);

  const fetchImageData = async () => {
    const response = await fetch(
      `${process.env.apiUrl}/${settings.section}/${settings.sort}/${settings.window}/${settings.page}?showViral=${settings.viral}`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.clientID}`,
        },
      },
    );

    const result: any = await response.json();
    const imageResult = result.success ? result.data : [];
    setImageDataList((prev) => [...prev, ...imageResult]);
  };

  useEffect(() => {
    fetchImageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {imageDataList.map((card: ImageDataType, index: number) => (
          <ImageCard key={index} {...card} />
        ))}
      </Grid>
    </>
  );
};

export default HomePage;
