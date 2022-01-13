import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { ListItemButton } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Man, Woman, Diamond, PhoneAndroid } from '@mui/icons-material';
import './util.css';

export default function SideDrawer(props) {;
    
    const categoryIcons = {
      "electronics" : <PhoneAndroid />,
      "jewelery" : <Diamond />,
      "men's clothing" : <Man />,
      "women's clothing" : <Woman />,
    }

    return(
        <Drawer
        sx={{
          width: { xl : '350px', lg : '300px', md : '275px', sm : '250px' },
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: { xl : '350px', lg : '300px', md : '275px', sm : '250px' },
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
            <ListItem key={'Categories'}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={'Categories'}/>
            </ListItem>
        </List>
        <Divider />
        <List>
          {props.categories.map((category, index) => ( 
            <ListItemButton key={index} selected = {category == props.selectedCategory} onClick={() => props.setSelectedCategory(category)}>
              <ListItemIcon>{categoryIcons[category]}</ListItemIcon>
              <ListItemText primary={category.charAt(0).toUpperCase() + category.slice(1)} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    )
}