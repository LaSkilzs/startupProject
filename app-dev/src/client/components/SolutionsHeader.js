import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "1rem",
    padding: "1rem",
    marginTop: "5rem"
  },
  h4: {
    marginBottom: "1rem"
  }
});

const SolutionsHeader = props => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Typography variant="h4">
        Easy video meetings for your Business
      </Typography>
      <Typography variant="h5">
        Get in Touch with our Account Specialist to Customize a plan that works
        for you!!
      </Typography>
    </Grid>
  );
};

export default SolutionsHeader;
