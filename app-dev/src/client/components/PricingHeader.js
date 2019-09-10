import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: "8rem",
    marginLeft: "40rem"
  },
  h2: {
    width: "20rem"
  }
});

const PricingHeader = props => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Typography variant="h2" className={classes.h2}>
        {props.name}
      </Typography>
    </Grid>
  );
};

export default PricingHeader;
