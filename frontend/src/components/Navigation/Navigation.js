import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';

import Container from "@material-ui/core/Container";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    // position: "relative",
  },
  nav: {
    position: "absolute",
    width: "100px",
    // height: 80,
    margin: 0,
    padding: 0,
    display: "flex",
    // zIndex: 15,

    justifyContent: "space-between",

  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundImage: "url(diagonal-striped-brick.png)",
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function Navigation() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const user = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logOutHandler = () => {
    handleDrawerClose();
    dispatch({ type: "USER_LOGOUT" });
  };

  return (

    <div className='root'>



      <CssBaseline />
      <Container className={classes.root}>
        <Toolbar className={classes.nav}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />


          </IconButton>

        </Toolbar>
      </Container>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <List>
          <ListItem
            onClick={handleDrawerClose}
            component={Link}
            to="/"
            variant="contained"
            color="inherit"
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Главная" />
          </ListItem>

          {!user ? (
            <>
              <ListItem
                onClick={handleDrawerClose}
                component={Link}
                to="/login"
                variant="contained"
                color="inherit"
              >
                <ListItemIcon>
                  <VpnKeyIcon />
                </ListItemIcon>
                <ListItemText primary="Войти как клиент" />
              </ListItem>
              <ListItem
                onClick={handleDrawerClose}
                component={Link}
                to="/loginperson"
                variant="contained"
                color="inherit"
              >
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Вход для сотрудников"

                />
              </ListItem>
              <ListItem
                onClick={handleDrawerClose}
                component={Link}
                to="/signup"
                variant="contained"
                color="inherit"
              >
                <ListItemIcon>
                  <LockOpenIcon />
                </ListItemIcon>
                <ListItemText primary="Регистрация" />
              </ListItem>
              <ListItem
                onClick={handleDrawerClose}
                component={Link}
                to="/about"
                variant="contained"
                color="inherit"
              >
                <ListItemIcon>
                  <AppsIcon />
                </ListItemIcon>
                <ListItemText primary="О нас" />
              </ListItem>
            </>
          ) : (
            <>
              <ListItem
                component={Link}
                to="/"
                variant="contained"
                color="inherit"
                onClick={() => {
                  logOutHandler();
                }}
              >
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Выйти" />
              </ListItem>
              <ListItem
                onClick={handleDrawerClose}
                component={Link}
                to="/profile"
                variant="contained"
                color="inherit"
              >
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Профиль" />
              </ListItem>
            </>
          )}
        </List>

        <Divider />
      </Drawer>
    </div>
  );
}

export default Navigation;
