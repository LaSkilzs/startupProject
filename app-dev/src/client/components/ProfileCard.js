import React from "react";
import Input from "./Input";
import Name from "./Name";
import ProfilePic from "./ProfilePic";
import { Paper, Grid, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    padding: "2rem",
    boxShadow: "10px 10px 10px 10px #d2e4ec",
    width: "50rem",
    height: "50vh",
    marginBottom: "5rem"
  },
  section: {
    display: "flex",
    flexDirection: "column",
    padding: "3rem",
    width: "30rem"
  },
  input: {
    margin: "0.5rem"
  },
  btn: {
    color: "white",
    background: "#ff5d00",
    fontWeight: "bold",
    padding: "0.5rem",
    margin: "0.5rem",
    marginTop: "5rem"
  },
  name: {
    textAlign: "center"
  }
});

const ProfileCard = props => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item md={4}>
        <ProfilePic />
        <Name name={"Username  "} />
        <Name name={"User Role  "} />
      </Grid>
      <Grid item md={8} className={classes.section}>
        <Input className={classes.input} name={"Show Logged In Username"} />
        <Input className={classes.input} name={"Show Logged In UserEmail"} />
        <Input className={classes.input} name={"Show Logged In Role"} />
        <Button variant="outlined" className={classes.btn}>
          {"Upgrade to Pro"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProfileCard;
