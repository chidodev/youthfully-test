import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

import { ImageDataType, ImageType } from '@/src/utils/types';

const ImageCard = (props: ImageData) => {
  // ** Props
  const { title, description, link, ups } = props;

  return (
    <Card sx={{ padding: 1.5 }}>
      <CardHeader
        avatar={<Avatar alt="" src="/images/logos/icon.png" />}
        title={title}
        titleTypographyProps={{ variant: 'h5' }}
      />
      <CardContent>
        <Box
          sx={{
            marginTop: 1.5,
            display: 'flex',
            flexWrap: 'wrap',
            marginBottom: 1.5,
            alignItems: 'flex-start',
          }}
        >
          <CardMedia
            component="img"
            alt=""
            height="140"
            image={link}
            sx={{
              borderRadius: '7px',
            }}
          />
        </Box>
        <Typography mt={5} variant="body1">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            marginTop: 1.5,
            width: '100%',
            padding: '15px',
            borderRadius: 100,
            background: `linear-gradient(0, #A9AFFC, #9155FD 65%)`,
          }}
          size="small"
          variant="contained"
        >
          {ups}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
