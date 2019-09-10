import React from "react";
import { Grid, Button, makeStyles } from "@material-ui/core";
import "../../assets/css/main.css";
import { servicelist } from "../js/LandingInfo";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    justifyContent: "center",
    // height: "1rem",
    width: "100rem",
    marginTop: "1rem",
    backgroundColor: "#0072d0"
  },
  grid: {
    textAlign: "center",
    marginTop: "1rem"
  },
  button: {
    color: "white",
    background: "#ff5900",
    fontWeight: "bold",
    fontSize: "1.2rem",
    borderRadius: 5,
    padding: "0.3rem",
    width: "10rem",
    marginTop: "1.5rem",
    textDecoration: "none",
    marginBottom: "3rem"
  },
  h3: {
    color: "#d2e4ec",
    margin: 0,
    padding: 0,
    fontSize: "1.3rem"
  },
  navlink: {
    color: "white",
    textDecoration: "none"
  }
});

const Services = props => {
  const classes = useStyles();
  const service = servicelist.map((service, idx) => {
    return (
      <Grid item xs={6} md={3} key={idx} className={classes.grid}>
        <div>{service.logo}</div>
        <h3 className={classes.h3}>{service.name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <Link to="/price-cards" className={classes.navlink}>
          <Button variant="outlined" className={classes.button}>
            LEARN MORE
          </Button>
        </Link>
      </Grid>
    );
  });
  return (
    <Grid container spacing={2} className={classes.root}>
      {service}
    </Grid>
  );
};

export default Services;
