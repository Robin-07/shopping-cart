import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Badge from '@mui/material/Badge';
import Popover from '@mui/material/Popover';
import CartContent from '../UI/cartContent';

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElCart, setAnchorElCart] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenCartMenu = (event) => {
    setAnchorElCart(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseCartMenu = () => {
    setAnchorElCart(null);
  };

  const open = Boolean(anchorElCart);
  const id = open ? 'simple-popover' : undefined;

  return (
    <AppBar position="fixed"
    sx={{ width: `calc(100% - 240px)`, ml: `240px` }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            Blabla Cart
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current Cart"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Cart">
              <IconButton size = 'large' onClick={handleOpenCartMenu} sx={{ p: 0 , ml: 90}}>
              <Badge badgeContent = {`${props.cartTotal}`} color = "secondary">
                <FontAwesomeIcon  icon = {faShoppingCart}/>
              </Badge>
              </IconButton>
            </Tooltip>
            <Popover
            id={id}
            open={open}
            anchorEl={anchorElCart}
            onClose={handleCloseCartMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: -50,
            }}
          >
            <CartContent setCartTotal = {props.setCartTotal} cartItems = {props.cartItems} setCartItems = {props.setCartItems}/>
          </Popover>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Guest User">
            <IconButton sx={{ p: 0 , ml: 10}}>
              <FontAwesomeIcon size = "lg" icon = {faUserCircle}/>
            </IconButton>
          </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;