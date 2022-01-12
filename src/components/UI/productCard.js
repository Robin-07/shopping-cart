import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(props) {
  const {product, cartItems} = props;
  return (
    <Card sx={{ maxWidth: 225, maxHeight: 300 }} elevation={10}>
      <CardMedia
        component="img"
        alt="product"
        height="100"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {product.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => props.setCartItems([ product, ...cartItems ])}>Add to cart</Button>
      </CardActions>
    </Card>
  );
}