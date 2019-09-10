import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/Yale-Logo.png";
import { auth } from "../../../../firebase";
import yaleFormStyles from "../../../../assets/js/yaleFormStyles";
import Footer from "../../../containers/Footer";

class YaleLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container className={classes.container2}>
          <Grid item md={12}>
            <Typography variant="h3" className={classes.head}>
              <img src={logo} className={classes.img}></img>
            </Typography>
          </Grid>

          <Grid container className={classes.container}>
            <Grid item md={12} className={classes.item1}>
              <Button
                variant="outlined"
                className={classes.btn1}
                onClick={() => {
                  let provider = new firebase.auth.GoogleAuthProvider();
                  auth.signInWithPopup(provider);
                  this.props.history.push("/immersful");
                }}
              >
                Login with Google
              </Button>
            </Grid>
            <Grid item md={12} className={classes.item3}>
              <Link to="/immersful" className={classes.navlink}>
                <Button variant="outlined" className={classes.btn2}>
                  Login with School Email
                </Button>
              </Link>
            </Grid>
            <Grid item md={12} className={classes.item4}></Grid>
          </Grid>
        </Grid>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(yaleFormStyles)(YaleLogin);
