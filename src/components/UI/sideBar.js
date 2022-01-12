import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { ListItemButton } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

export default function SideDrawer(props) {;
    return(
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
            <ListItem button key={'Filter By Category'}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={'Categories'}/>
            </ListItem>
        </List>
        <Divider />
        <List>
          {props.categories.map((category, index) => ( 
            <ListItemButton key={index} selected = {category == props.selectedCategory} onClick={() => props.setSelectedCategory(category)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={category.replace(/\b\w/g, l => l.toUpperCase())} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    )
}