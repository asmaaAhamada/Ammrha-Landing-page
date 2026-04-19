import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {blue} from "../color-main/color"
import logo from '../../assets/image/logo/Logo Container.svg'

import { useTheme } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';

// icons
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ButtonJoin from '../page/Button/join';

const drawerWidth = 240;

const navItems = [
  {
    label: 'الصفحة الرئيسية',
    path: '/',order: 1
  },
  {
    label: 'من نحن',
    path: '/about',order: 2
  },
  {
    label: 'تواصل معنا',
    path: '/contact',order: 3
  },
].sort((a, b) => a.order - b.order);;

function DrawerAppBar(props) {
  const { window, toggleMode, mode } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100%' }}>
      {/* Dark Mode */}
      <IconButton onClick={toggleMode} sx={{ mb: 2 }}>
        {mode === 'light' ? <DarkModeOutlinedIcon color:blue /> : <WbSunnyOutlinedIcon />}
      </IconButton>

      <Divider />

      <List>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  gap: 2,
                  color: isActive ? theme.palette.primary.text : 'rgba(113, 127, 166, 1)',

                  bgcolor: isActive ? theme.palette.action.selected : 'transparent',
                }}
              >
                {item.icon}
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/*  AppBar */}
      <AppBar
        component="nav"
        position="fixed"
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: theme.palette.primary.Appar,
          color: theme.palette.primary.text,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

          {/*  LEFT: Menu + Logo + DarkMode */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

            {/* ☰ Menu  */}
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' }, color: theme.palette.primary.drawer }}
            >
              <MenuIcon sx={{color: theme.palette.primary.drawer}} />
            </IconButton>

            {/* Logo */}
            <Box
            
              component="img"
              src={logo}
              alt="logo"
              sx={{
                background:theme.palette.primary.logo,
                width: 52,
                height: 49,
                borderRadius: '8px',
              }}
            />

            {/* Dark Mode */}
          <IconButton
  onClick={toggleMode}
  sx={{ color: 'white', width: 45, height: 56 }}
>
  {mode === 'light' ? (
    <DarkModeOutlinedIcon sx={{ fontSize: 45 ,color:blue }} />
  ) : (
    <WbSunnyOutlinedIcon sx={{ fontSize: 45 }} />
  )}
</IconButton>
          </Box>

          {/*  RIGHT: Nav + Button */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

            {/* Navigation */}
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                gap: 1,
                    flexDirection: 'row-reverse', // 🔥 هذا الحل الأساسي

              }}

            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                 <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{
                  color: isActive ? theme.palette.primary.text : 'rgba(113, 127, 166, 1)',
                      position: 'relative',

                      '&::after': isActive
                        ? {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: -2,
                            height: '2px',fontWeight:400,fontSize:'14px',
                            backgroundColor: theme.palette.primary.text,
                            borderRadius: '2px',
                          }
                        : {},
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>

            {/* Join Button */}
                     <ButtonJoin/>
            
          </Box>
        </Toolbar>
      </AppBar>
<Toolbar />
      {/*  Drawer */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main" sx={{ p: 3, flexGrow: 1 }} />
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default DrawerAppBar;