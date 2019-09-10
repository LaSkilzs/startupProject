import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { specials } from "../../js/LandingInfo";

const useStyles = makeStyles({
  item: {
    marginTop: "0rem",
    padding: "2rem"
  },
  div: {
    // height: "20vh",
    textAlign: "center"
  },
  h5: {
    fontSize: "1.1rem",
    color: "white"
  },
  div2: {
    background: "#0072d0",
    // marginTop: "10rem",
    width: "100rem"
  },
  typo: {
    padding: "2rem",
    textAlign: "center",
    color: "white",
    fontSize: "3rem"
  },
  cont: {
    justifyContent: "center",
    height: "30rem"
  }
});

const SpecialOfferings = props => {
  const classes = useStyles();
  const special = specials.map((card, idx) => {
    return (
      <Grid item xs={2} key={idx} className={classes.item}>
        <div className={classes.div}>
          <div>{card.icon}</div>
          <h5 className={classes.h5}>{card.why}</h5>
        </div>
      </Grid>
    );
  });

  return (
    <div className={classes.div2}>
      <Typography variant="h2" className={classes.typo}>
        Why Immersful?
      </Typography>
      <Grid container className={classes.cont}>
        {special}
      </Grid>
    </div>
  );
};

export default SpecialOfferings;
