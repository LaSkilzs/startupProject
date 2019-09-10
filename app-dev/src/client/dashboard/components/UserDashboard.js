import React from "react";
import {
  Grid,
  Avatar,
  makeStyles,
  Button,
  Typography
} from "@material-ui/core";
import Select from "../../components/Selector";
import UserPricing from "../../containers/UserPricing";
import Footer from "../../containers/Footer";

const useStyles = makeStyles({
  container: {
    marginTop: "6rem",
    margin: "auto"
  },
  section: {
    display: "flex",
    justifyContent: "space-around"
  },
  item1: {
    display: "flex",
    justifyContent: "center"
  },
  btn: {
    color: "white",
    background: "#d2e4ec",
    fontWeight: "bold",
    margin: "0.3rem",
    width: "10rem"
  },
  btn2: {
    color: "white",
    background: "#ff5d00",
    fontWeight: "bold",
    margin: "0.3rem",
    width: "10rem"
  },
  h1: {
    fontSize: "5rem",
    fontWeight: "bold",
    color: "#ff5d00"
  }
});
const UserDashboard = props => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item md={12} className={classes.item1}>
        <div>
          <Avatar
            style={{
              width: "7rem",
              height: "7rem",
              background: "d2e4ec",
              marginLeft: "4rem"
            }}
          >
            <h1 className={classes.h1}>{"U"}</h1>
          </Avatar>

          <Typography style={{ marginLeft: "4rem" }} variant="h5">
            username
          </Typography>
        </div>
        <div style={{ width: "100rem" }}>
          <Select />
          <Button className={classes.btn2}>Create a Room</Button>
        </div>
      </Grid>
      <Grid item md={12} className={classes.item1}>
        <UserPricing />
      </Grid>
    </Grid>
  );
};

export default UserDashboard;
