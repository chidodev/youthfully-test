import { useState } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ImageEnlarger from '../image';

import { ImageDataType, ImageType } from '@/src/utils/types';

const ImageCard = (props: ImageDataType) => {
  const { title, description, images_count, score, ups, downs, images } = props;

  const isImgUrl = (url: string) => {
    return /\.(jpg|jpeg|png|webp|avif|gif)$/.test(url);
  };

  const [zoomed, setZoomed] = useState(false);
  return (
    <>
      {images_count && isImgUrl(images[0].link) && (
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box>
                <ImageEnlarger
                  title={title}
                  description={description}
                  ups={ups}
                  downs={downs}
                  score={score}
                  style={{ width: '100%' }}
                  zoomed={zoomed}
                  src={images[0].link}
                  onClick={() => setZoomed(true)}
                  onRequestClose={() => setZoomed(false)}
                />
              </Box>
              <Box>
                <Typography mt={5} variant="body1">
                  {images[0].description || 'No descriptin'}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default ImageCard;
