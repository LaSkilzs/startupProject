import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import SolutionsHeader from "../components/SolutionsHeader";
import BusinessSolutions from "../components/BusinessSolutions";
import SolutionsForm from "../components/SolutionsForm";
import Footer from "./Footer";

const useStyles = makeStyles({
  cont: {
    width: "80rem",
    margin: "0 auto"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 414px)": {
      width: "50rem"
    }
  },
  root: {
    width: "100rem",
    margin: "0 auto",
    justifyContent: "center"
  }
});
const Solutions = props => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <SolutionsHeader />
      <Grid container className={classes.cont}>
        <Grid item md={4}>
          <BusinessSolutions />
        </Grid>
        <Grid item md={8} className={classes.item}>
          <SolutionsForm />
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Solutions;
