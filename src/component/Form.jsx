import React, { Component } from "react";
import { TextField, Grid, Button, makeStyles } from "@material-ui/core";
import { Height } from "@material-ui/icons";

const mystyles = makeStyles((theme) => ({
  cont: {
    backgroundColor: `${theme.palette.background}`,
    display: "flex",
    justifyContent: "space-around",
  },
  formsize: {
    width: "300px",
    Height: "50px",
  },
  buttonsize: {
    width: "300px",
    height: "50px",
  },
}));

const Frominp = (props) => {
  const classes = mystyles();
  return (
    <form onSubmit={props.fetchdata}>
      <Grid container className={classes.cont}>
        <Grid item md={3} xs={12} sm={12}>
          <TextField
            label="Country"
            name="country"
            id="country"
            className={classes.formsize}
          />
        </Grid>

        <Grid item md={3} xs={12} sm={12}>
          <TextField
            label="City"
            name="city"
            id="city"
            className={classes.formsize}
          />
        </Grid>

        <Grid item md={3} xs={12} sm={12}>
          <Button
            variant="contained"
            color="primary"
            type="submite"
            className={classes.buttonsize}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Frominp;
