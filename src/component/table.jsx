import React, { Component } from "react";
import { Paper, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import tmpimg from "../26672.png";
import humm from "../humm.png";
import wind from "../download.png";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  datazone: {
    margin: "20px 5px",
    padding: "10px",
  },
  maindiv: {
    margin: "20px 5px",
    padding: "10px",
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
  },
});

function Tabledt(props) {
  const classes = useStyles();

  if (props.data.country != "") {
    return (
      <Grid container spacing={3} className={classes.maindiv}>
        <Grid item xs={12} sm={12} md={2}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                image={`https://www.countryflags.io/${props.data.country}/flat/64.png`}
                className={classes.media}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Country
                </Typography>
                <Typography variant="h5" color="primary">
                  {props.data.country}{" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={2}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  City
                </Typography>
                <Typography variant="h5" color="primary">
                  {props.data.city}{" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={2}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                image={tmpimg}
                className={classes.media}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  temperature
                </Typography>
                <Typography variant="h5" color="primary">
                  {props.data.temperature}{" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={2}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                image={humm}
                className={classes.media}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  humidity
                </Typography>
                <Typography variant="h5" color="primary">
                  {props.data.humidity}{" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={2}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                image={wind}
                className={classes.media}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Wind speed
                </Typography>
                <Typography variant="h5" color="primary">
                  {props.data.speed}{" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Paper>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.datazone}
        >
          No Data has Founded
        </Typography>
      </Paper>
    );
  }
}

export default Tabledt;
