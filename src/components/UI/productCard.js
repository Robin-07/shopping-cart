import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './util.css';

export default function ImgMediaCard(props) {
  const {product, cartItems, setShowProductPopup,
     setSelectedProduct, setCartTotal, setCartPriceTotal} = props;

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
    setCartTotal(prevState => prevState + 1);
    setCartPriceTotal(prevState => prevState + (Math.round(product.price * 700) / 10));
  }
  return (
    <Card sx={{ width: '250px', height: '300px', paddingTop: '10px' }} elevation={10}>
      <CardMedia
        onClick={() => {
          setShowProductPopup(true);
          setSelectedProduct(product);}}
        style = {{ cursor: 'pointer' }}
        component="img"
        alt="product"
        height="100"
        image={product.image}
      />
      <Divider light = {true} variant = 'middle'/>
      <CardContent>
        <Tooltip title = {`${product.title}`}>
        <Typography gutterBottom variant="h7" component="div" align='center'>
          {product.title.slice(0,22) + '...'}
        </Typography>
        </Tooltip>
        <Tooltip title = {`${product.rating.rate} out of 5`}>
          <Typography align = 'center'>
          <Rating name="read-only" value={product.rating.rate} precision ={0.5} readOnly />
          </Typography>
        </Tooltip>
        <Typography align='center' variant='h5'>
         <i style = {{ fontSize: '0.75em' }}>&#8377;</i>&nbsp;
         <b>{(Math.round(product.price * 700) / 10).toLocaleString('en-US')}</b>
        </Typography>
      </CardContent>
      <CardActions>
        <div className='add-to-cart'>
        <Button size="small" style = {{textTransform: 'none', fontSize: '1em'}} onClick={handleAddToCart}>Add to cart&nbsp;
        <FontAwesomeIcon size = "md" icon = {faCartPlus}/>
        </Button>
        </div> 
      </CardActions>
    </Card>
  );
}