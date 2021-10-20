import React, { useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { CssBaseline } from "@material-ui/core";
import CloudIcon from "@material-ui/icons/Cloud";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  navigation: {
    // border: "1px solid black ",
    width: "100%",
    height: "50px",
    "& .nav": {
      display: "flex",
      justifyContent: "space-around",
    },
  },

  appbar: {
    backgroundColor: "white",
    width: "80%",
    margin: "0 auto",
  },

  toolbar: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "left",
    },
  },
  btnstyle: {
    background: "none",
    padding: "10px",
    border: "none",
    "&:hover": {
      backgroundColor: "grey",
    },
  },
  gridcontrain: {
    height: "50px",
    paddingTop: "10px ",
  },
  spancolor: {
    color: "black",
    fontFamily: "Audiowide",
  },
  sofiafont: {
    fontFamily: "Sofia",
  },
  licnt: {
    fontFamily: "Arial",
    textTransform: "Uppercase",
    marginLeft: "30px",
  },
  drawerstyle: {
    "& .MuiPaper-elevation16": {
      width: "80%",
      margin: "0 auto",
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [state, setstate] = useState(false);

  const listeitems = [
    {
      text: "Home",
    },
    { text: "About us" },
    { text: "Login" },
    { text: "Contact" },
  ];
  console.log(listeitems);
  console.log(matches);
  const itemdivlist = listeitems.map((item) => {
    const { text } = item;
    return (
      <ListItem button key={text}>
        <ListItemText primary={text} />
      </ListItem>
    );
  });

  console.log(itemdivlist);
  console.log(matches);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      setstate(false);
    }
  };

  const Drawer = (props) => {
    return (
      <MUIDrawer
        anchor="top"
        className={classes.drawerstyle}
        open={state}
        onClose={() => {
          toggleDrawer(false);
        }}
      >
        <button
          onClick={() => {
            setstate(false);
          }}
          className={classes.btnstyle}
        >
          <Typography variant="h6" color="primary">
            <MenuIcon />
          </Typography>
        </button>
        <List>{itemdivlist}</List>
      </MUIDrawer>
    );
  };

  function Deskapp() {
    return (
      <Grid container className={classes.gridcontrain}>
        <Grid item md={4} xs={12} sm={12}>
          {" "}
          <Typography
            variant="h6"
            color="primary"
            className={classes.sofiafont}
          >
            <CloudIcon /> Weather
            <span className={classes.spancolor}>APP</span>
          </Typography>
        </Grid>

        <Grid item md={8} xs={12} sm={12}>
          <nav className={classes.navigation}>
            <ul className="nav">
              <Link to="/">
                <Typography color="primary" className={classes.licnt}>
                  Home
                </Typography>
              </Link>
              <Link to="/about">
                <Typography color="primary" className={classes.licnt}>
                  About us
                </Typography>
              </Link>
              <Link to="/login">
                <Typography color="primary" className={classes.licnt}>
                  Login
                </Typography>
              </Link>
              <Link to="/Contact">
                <Typography color="primary" className={classes.licnt}>
                  Contact
                </Typography>
              </Link>
            </ul>
          </nav>
        </Grid>
      </Grid>
    );
  }
  function Mobilapp() {
    return (
      <div>
        <button
          className={classes.btnstyle}
          onClick={() => {
            setstate(true);
          }}
        >
          <Typography variant="h6" color="primary">
            <MenuIcon />
          </Typography>
        </button>
      </div>
    );
  }

  function Appbare() {
    return (
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          {!matches ? <Deskapp /> : <Mobilapp />}
        </Toolbar>
      </AppBar>
    );
  }
  return (
    <div>
      <CssBaseline />

      <Appbare />
      <Drawer />
    </div>
  );
}
