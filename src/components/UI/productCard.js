import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './util.css';

export default function ImgMediaCard(props) {
  const {product, cartItems} = props;

  const handleAddToCart = () => {
    let found = false;
    for(const item of cartItems){
      if(product === item){
        found = true;
        item.qty += 1;
        break;
      }
    }
    if(!found){
      product.qty = 1;
      props.setCartItems([ product, ...cartItems ]);
    }
    props.setCartTotal(prevState => prevState + 1);
  }
  return (
    <Card sx={{ width: '18vw', height: '50vh' }} elevation={10}>
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
        <div className='add-to-cart'>
        <Button size="small" onClick={handleAddToCart}>Add to cart&nbsp;
        <FontAwesomeIcon size = "lg" icon = {faCartPlus}/>
        </Button>
        </div> 
      </CardActions>
    </Card>
  );
}