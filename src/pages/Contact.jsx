import React from "react";
import {
  makeStyles,
  TextField,
  Paper,
  Card,
  TextareaAutosize,
  Button,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";

import WhoAreWe from "../component/whoarewe/Whocomponent";

const useStyle = makeStyles((theme) => ({
  root: {},
  biggrid: {
    width: "80%",
    margin: "30px auto",
  },
  formalign: {
    textAlign: "center",
    padding: "20px 0px",
    height: "500px",

    borderTopLeftRadius: "50px",
    borderBottomRightRadius: "50px",
    backgroundColor: "rgb(0 , 0 , 0 , 0.1)",
    "&:hover": {
      backgroundColor: "rgb(0 , 0 , 0 , 0.4)",
    },
  },
  sharedwh: {
    width: "70%",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "250px",
    },
  },

  textarea: {
    borderColor: "blue",
    color: "black",
    borderRadius: "20px",
    outline: "none",
    padding: "5px 10px",
    opacity: "0.3",
    fontSize: "15px",
  },
}));

const Formvl = () => {
  const classes = useStyle();
  return (
    <form
      noValidate
      autoComplete="off"
      className={clsx(classes.border, classes.formalign)}
      variant="outlined"
    >
      <div>
        <TextField
          label="Full Name"
          name="fullname"
          className={clsx(classes.sharedwh)}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          label="Email"
          name="email"
          className={clsx(classes.sharedwh)}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          label="Phone"
          name="phone"
          className={clsx(classes.sharedwh)}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          label="Text"
          className={clsx(classes.sharedwh)}
          multiline
          rows={4}
          variant="outlined"
          placeholder="Message"
          name="text"
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          type="submite"
          className={classes.sharedwh}
        >
          Search
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          type="submite"
          className={classes.sharedwh}
        >
          Reset
        </Button>
      </div>
    </form>
  );
};

const Contact = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container className={clsx(classes.biggrid)} spacing={5}>
        <Grid item md={6} xs={12} sm={12} className={classes.border1}>
          <Formvl />
        </Grid>

        <Grid item md={6} xs={12} sm={12} className={classes.border2}>
          <WhoAreWe />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
