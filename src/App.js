import "./App.css";
import React, { Component } from "react";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.jsx"
import PrimarySearchAppBar from "./component/header/header";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
const  App = () => {
  const theme = createTheme({})
    return (
      <ThemeProvider theme={theme}>
      <Router>
      <div style={{ display: "flex",

      flexDirection: "column"}}>

      <PrimarySearchAppBar />

         <Switch>
          <Route path="/" exact>
             <Home />
          </Route>
          <Route path="/Contact" exact>
            <Contact />
          </Route>
         
        </Switch>
       </div>
      </Router>
      
      </ThemeProvider>
    );
  
}

export default App;
