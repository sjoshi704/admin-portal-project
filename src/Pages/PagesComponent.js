import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import useAuth from '../CustomHooks/UseAuth'
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled, useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Box from "@mui/material/Box";
import Drawer from '@mui/material/Drawer';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';
import { CategoryComponent} from './Catogery/CatogeryComponent';
const drawerWidth = 240;



export function PagesComponent() {
  const [open, setOpen] = React.useState(true);
  const [menuOpen, setMenuOpen] = React.useState(true);
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate()
  const isAuthenticated = useAuth()
  useEffect(() => {

    // if(!isAuthenticated){
    //   navigate('/login')
    // }
  })

  return <>
    <div>   <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { title: 'Dashboard', route: 'dashboard', icons: <DashboardIcon /> },
            {
              title: 'Categories', route: 'categories', icon: <InboxIcon />, isCollapsable: true,
              children: [
                { title: 'Main Categories', route: 'categories/main-categories', icon: <DashboardIcon /> },
                { title: 'Sub Categories', route: 'categories/sub-categories', icon: <DashboardIcon /> }
              ]
            },
            { title: 'Products', route: 'products', icons: <InventoryIcon /> },
            { title: 'Orders', route: 'orders', icons: <ShoppingCartIcon /> },
            { title: 'Users', route: 'users', icons: <PeopleIcon /> }
          ].map((obj, index) => (
            <React.Fragment key={obj.title}>
              <ListItemButton onClick={() => {
                navigate(obj.route)
                if (obj.isCollapsable) {
                  setMenuOpen(!menuOpen)
                }
              }}>
                <ListItemIcon>
                  {obj.icon}
                </ListItemIcon>
                <ListItemText primary={obj.title} />
                {obj.isCollapsable && <>
                  {menuOpen ? <ExpandLess /> : <ExpandMore />}
                </>}
              </ListItemButton>
              {obj.isCollapsable && <Collapse in={menuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {obj.children.map(child => {
                    return <ListItemButton sx={{ pl: 4 }} key={child.title} onClick={() => navigate(child.route)}>
                      <ListItemIcon>
                        {child.icon}
                      </ListItemIcon>
                      <ListItemText primary={child.title} />
                    </ListItemButton>
                  })}
                </List>
              </Collapse>}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to={"dashboard"} replace={true} />}></Route>

            <Route path="dashboard" element={<div> Dashboard Page</div>}></Route>
            <Route path="categories/*" element={<CategoryComponent> </CategoryComponent>}> </Route>
            <Route path="products" element={<div> Products Page</div>}> </Route>
            <Route path="orders" element={<div> Orders Page</div>}></Route>
            <Route path="users" element={<div> Users Page</div>}></Route>

          </Routes>
        </div>
      </Main>
    </Box></div>
  </>
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));




const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));