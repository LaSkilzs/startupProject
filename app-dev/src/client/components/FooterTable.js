import React from "react";
import { makeStyles, Breadcrumbs, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    padding: "0.4rem",
    justifyContent: "center",
    width: "100rem"
    // "@media (max-width: 1024px)": {
    //   width: "70rem"
    // },
    // "@media (max-width: 414px)": {
    //   width: "80rem"
    // },

    // "@media (max-width: 1414px)": {
    //   width: "80rem"
    // }
  },
  links: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "white",
    textDecoration: "none"
  },
  bread: {
    display: "flex",
    padding: "0.4rem",
    marginLeft: "1.5rem"
  }
});

const FooterTable = props => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item md={12} className={classes.item}>
        <Breadcrumbs
          separator="/"
          aria-label="breadcrumb"
          className={classes.root}
        >
          <Link to="/faq" className={classes.links}>
            FAQ
          </Link>
          <Link to="/terms" className={classes.links}>
            Terms & Policies
          </Link>
          <Link to="/security" className={classes.links}>
            Security
          </Link>
          <Link to="/contact" className={classes.links}>
            Contact Us
          </Link>
          <Link to="/landing-page" className={classes.links}>
            Immersful.com
          </Link>
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
};

export default FooterTable;
