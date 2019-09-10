import React from "react";
import { Grid } from "@material-ui/core";
import ProfileCard from "../../components/ProfileCard";
import { makeStyles } from "@material-ui/core";
import PricingHeader from "../../components/PricingHeader";
import Footer from "../../containers/Footer";

const useStyles = makeStyles({
  container: {
    justifyContent: "center",
    margin: "auto 15rem"
  },
  container2: {
    display: "flex",
    marginTop: "5rem",
    marginLeft: "6rem"
  }
});
const Profile = props => {
  const classes = useStyles();
  return (
    <div>
      <PricingHeader name={"Profile"} />
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.container2}>
          <ProfileCard />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Profile;
