import React, { Component } from "react";
import Tabledt from "../component/table.jsx";
import Frominp from "../component/Form.jsx";
import { ThemeProvider } from "@material-ui/styles";
import logo from "../weather.png";

import {
  Typography,
  Card,
  Container,
  CardContent,
  withStyles,
  createTheme,
  Paper,
  CardMedia,
} from "@material-ui/core";

const API_KEY = "017fb7c266175d016a57782790ec244e";

const theme = createTheme({
  palette: {
    background: {
      default: "#f50057",
    },
  },
});

const useStyle = (theme) => ({
  head: {
    margin: "20px 0px",
    padding: "20px",
  },
  headpick: {
    display: "flex",
  },
  logo: {
    weight: "100px",
    height: "100px",
  },
});

class Home extends Component {
  state = {
    country: "",
    city: "",
    temperature: "",
    description: "",
    humidity: "",
    speed: "",
    erreur: false,
  };

  fetchdata = async (e) => {
    e.preventDefault();
    const cnt = e.target.elements.country.value;
    const ct = e.target.elements.city.value;
    console.log(ct + cnt);
    try {
      const dt = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${ct},${cnt}&APPID=${API_KEY}`
      );

      const data = await dt.json();
      const newobj = {
        country: cnt,
        city: ct,
        temperature: data.main.temp,
        description: data.weather.description,
        humidity: data.main.humidity,
        speed: data.wind.speed,
        erreur: false,
      };
      console.log(newobj);
      this.setState(newobj);

      
    } catch (error) {
      const newobj = {
        country: "",
        city: "",
        temperature: "",
        description: "",
        humidity: "",
        speed: "",
        erreur: true,
      };
      console.log(newobj);
      this.setState(newobj);
    }

    
  };

  render() {
    const { classes } = this.props;
    console.log(this.state);
    return (
      <>   
          <Container align="center" className={classes.head}>
            <Paper elevation={0} className={classes.headpick} />

            <img src={logo} alt="ourlogo" className={classes.logo} />

            <div>
              <Typography variant="h4" gutterBottom>
                Weather Application
              </Typography>
              <Typography variant="body2" paragraph>
                Welcom to our weather application here u can track all weather
                of alote of country
              </Typography>
            </div>
            <Paper />
          </Container>

          <Container align="center" background="default">
            <Frominp fetchdata={this.fetchdata} />
            <Tabledt data={this.state} />
          </Container>
      </>
    );
  }
}

export default withStyles(useStyle)(Home);
