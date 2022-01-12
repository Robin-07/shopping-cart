import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import './util.css';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function CheckboxListSecondary(props) {
  const [checked, setChecked] = React.useState([1]);
  const {cartItems, setCartItems} = props;

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
              {console.log(cartItem)}
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
                  <ListItemText primary={'Quantity: ' + cartItem.qty}/>
                </div>
                <div className='cart-item-delete'>
                  <IconButton>
                      <FontAwesomeIcon icon = {faTrash} style={{ color: '#ED2939', fontSize: '16px' }}/>
                  </IconButton>
                </div>
              </div>
            </ListItemButton>
          </ListItem>
        );
      }) : <ListItem><ListItemText primary = 'Cart Empty !'/></ListItem>}
    </List>
  );
}