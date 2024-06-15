import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

interface CardComponentProps {
  href: string;
  image: string;
  alt: string;
  title: string;
  description: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ href, image, alt, title, description }) => (
  <Card 
    sx={{ 
      width: '350px', 
      height: '300px', 
      backgroundColor: 'primary.main', 
      color: 'theme.palette.secondary.main', 
    }}
  >
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <CardActionArea>
        <CardMedia component="img" height="125" image={image} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="theme.palette.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </a>
  </Card>
);

export default CardComponent;