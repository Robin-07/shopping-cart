import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import './util.css';
import { Button, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function CheckboxListSecondary(props) {
  const [checked, setChecked] = React.useState([1]);
  const {cartItems, setCartItems} = props;

  const handleQtyChange = (item, change) => {
    item.qty += change;
    props.setCartTotal(prevState => prevState + change);
    props.setCartPriceTotal(prevState => prevState + (change * (Math.round(item.price * 700) / 10)));
  }

  const handleItemDelete = (item) => {
    const filteredCart = []
    for(const cartItem of cartItems){
      if(item == cartItem) continue;
      filteredCart.push(cartItem);
    }
    setCartItems(filteredCart);
    props.setCartTotal(prevState => prevState - item.qty);
    props.setCartPriceTotal(prevState => prevState - (Math.round((item.qty * item.price) * 700) / 10));
  }

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
      {cartItems.length ? cartItems.map((cartItem) => {
        const labelId = `checkbox-list-secondary-label-${cartItem.id}`;
        return (
          <ListItem
            key={cartItem.id}
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${cartItem.id + 1}`}
                  src={cartItem.image}
                />
              </ListItemAvatar>
              <div className = 'cart-item-content'>
                <div className = 'cart-item-details'>
                  <ListItemText id={labelId} primary={cartItem.title.slice(0,20) + '..'} />
                  <div className='cart-item-qty'>
                  <div>
                    <ListItemText primary={'Quantity: ' + cartItem.qty}/>
                  </div>
                  <div className = 'item-qty-btns'>
                    <button onClick={() => handleQtyChange(cartItem,1)}><FontAwesomeIcon style = {{ fontSize: '12px', color: 'black'}} icon = {faChevronUp} /></button>
                    <div>
                    <button disabled = {cartItem.qty == 1} onClick={() => handleQtyChange(cartItem,-1)}><FontAwesomeIcon style = {{ fontSize: '12px', color: `${cartItem.qty==1?'gray':'black'}`}} icon = {faChevronDown} /></button>
                    </div>
                  </div>
                  </div>
                </div>
                <div>
                  <IconButton onClick={() => handleItemDelete(cartItem)}>
                      <FontAwesomeIcon icon = {faTrash} style={{ color: '#ED2939', fontSize: '16px' }}/>
                  </IconButton>
                </div>
              </div>
            </ListItemButton>
          </ListItem>
        );
      }) : <ListItem><ListItemText primary = 'Your Cart is Empty'/></ListItem>}
      {cartItems.length ? 
      <ListItem>
        <div className = 'cart-total'>Cart Total: &#8377;&nbsp;{props.cartPriceTotal.toLocaleString('en-US')}</div>
      </ListItem> : ''}
    </List>
  );
}