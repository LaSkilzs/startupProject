import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import PriceCard from "../components/PriceCard";
import PricingHeader from "../components/PricingHeader";
import Footer from "./Footer";

const useStyles = makeStyles({
  grid: {
    marginTop: "1rem",
    justifyContent: "center",
    "@media (max-width: 768px)": {
      width: "100rem",
      margin: "2rem"
    }
  },
  item: {
    display: "flex",
    maxWidth: "60rem",
    "@media (max-width: 414px)": {
      width: "80rem",
      marginLeft: "13rem"
    }
  }
});
const PriceCards = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <PricingHeader name={"Pricing"} />
      <Grid container space={6} className={classes.grid}>
        <Grid className={classes.item} item md={3}>
          <PriceCard />
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

export default PriceCards;
