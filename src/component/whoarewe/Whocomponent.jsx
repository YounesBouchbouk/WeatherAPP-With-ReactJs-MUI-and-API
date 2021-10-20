import react from "react";
import { makeStyles } from "@material-ui/styles";
import logo from "../../weather.png";
import { TextField, Button, Typography } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Card from "@material-ui/core/Card";
const useStyle = makeStyles((theme) => ({
  divfather: {
    // border: "2px solid blue",
    textAlign: "center",
    padding: "45px 5px ",
    borderTopRightRadius: "50px",
    borderBottomLeftRadius: "50px",
    backgroundColor: "rgb(0 , 0 , 0 , 0.1)",
    height: "500px",
  },
  imagelogo: {
    width: "70%",
    Height: "200px",
  },
  root: {
    marginTop: "40px",
    border: "1px solid black",
    padding: "10px 10px",
  },
  clBottomNavigation: {
    border: "2px solid black",
  },
}));
const WhoAreWe = () => {
  const classes = useStyle();
  return (
    <div className={classes.divfather}>
      <img src={logo} alt="new image" className={classes.imagelogo} />
      <Typography variant="h4" color="primary">
        {" "}
        Weather Application
      </Typography>
      <Typography variant="body" color="primary" paragraph>
        {" "}
        Powred by Younes Bouchbouk{" "}
      </Typography>
      <hr />
      <BottomNavigation
        variant="Outlined"
        value="recents"
        className={classes.root}
      >
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default WhoAreWe;
