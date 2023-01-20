import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

import { ImageDataType, ImageType } from '@/src/utils/types';

const ImageCard = (props: ImageDataType) => {
  const { title, description, images_count, link, ups, images } = props;

  const isImgUrl = (url: string) => {
    return /\.(jpg|jpeg|png|webp|avif|gif)$/.test(url);
  };

  return (
    <>
      {images_count && isImgUrl(images[0].link) && (
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <CardMedia
                component="img"
                alt=""
                height="140"
                image={images[0].link}
                sx={{
                  borderRadius: '7px',
                }}
              />
              <Typography mt={5} variant="body1">
                {images[0].description || 'No descriptin'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default ImageCard;
