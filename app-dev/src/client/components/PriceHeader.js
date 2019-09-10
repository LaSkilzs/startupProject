import React from "react";
import {
  makeStyles,
  Typography,
  FormControlLabel,
  Switch,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "2rem",
    padding: "1rem"
  }
});

const PriceHeader = props => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Typography variant="h2">Simple Pricing</Typography>
      <Typography variant="h5">
        No Subscription Required, Just Download and Use
      </Typography>
      <FormControlLabel
        control={<Switch checked={false} />}
        label="Bill Annually"
        style={{ display: "block" }}
      />
    </Grid>
  );
};

export default PriceHeader;
