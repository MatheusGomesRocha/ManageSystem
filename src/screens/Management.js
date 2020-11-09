import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import { useMediaQuery } from 'react-responsive';

import { Button, TextField } from '@material-ui/core';
import OpenMenu from '../svg/menu';
import CloseMenu from '../svg/close';
import SettingIcon from '../svg/settings';
import BoxIcon from '../svg/caixa';
import UserIcon from '../svg/users';
import OrderIcon from '../svg/orders';
import MessageIcon from '../svg/message';

import {
  Container,

  Header,
  HeaderInput,

  Menu,
  MenuTop,
  MenuBottom,
  MenuTitle,
  MenuBtn,
} from './ManagementStyled';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const isMobileDevice = useMediaQuery({
    query: '(max-width: 750px)'
  });

  const MenuDesktop = () => {
    return (
      <Menu>
        <MenuTop>
          <MenuTitle>SeuMercado</MenuTitle>

          <MenuBtn>
            <OrderIcon />
            Orders
          </MenuBtn>

          <MenuBtn>
            <BoxIcon />
            Products
          </MenuBtn>

          <MenuBtn>
            <UserIcon />
            Users
          </MenuBtn>

          <MenuBtn>
            <MessageIcon />
            Messages
          </MenuBtn>
        </MenuTop>

        <MenuBottom>
          <MenuBtn>
            <SettingIcon />
            Settings
          </MenuBtn>
          <MenuBtn>Log out</MenuBtn>
        </MenuBottom>
      </Menu>
    );
  }

  return (
    <Container>
      {isMobileDevice ?

        <div>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar style={{ backgroundColor: '#1f2933' }}>
              <Button
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <OpenMenu />
              </Button>

            </Toolbar>
          </AppBar>

          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Header>
              <Button onClick={handleDrawerClose}>
                <CloseMenu />
              </Button>
            </Header>
            <Divider />

          </Drawer>
        </div>

        :
        <div style={{display: 'flex'}}>
          <MenuDesktop />

          <Header>
            <HeaderInput
              placeholder="Search"
            />
          </Header>
        </div>
      }



    </Container>
  );
}
