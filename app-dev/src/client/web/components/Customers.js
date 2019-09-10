import React from "react";
import Avatars from "../../components/Avatars";
import {
  Typography,
  Button,
  Grid,
  makeStyles,
  TextField
} from "@material-ui/core";
import Footer from "../../containers/Footer";

const useStyles = makeStyles({
  button: {
    color: "white",
    height: "6vh",
    background: "#ff5900",
    fontWeight: "bold",
    fontSize: "1rem",
    padding: ".5rem",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  avatars: {
    display: "flex",
    justifyContent: "center",
    margin: "1.5rem"
  },
  typo: {
    margin: "auto",
    marginTop: "3rem",
    fontSize: "3rem",
    marginBottom: "4rem"
  },
  txtfield: {
    width: "50rem",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  grid: {
    height: "40vh",
    textAlign: "center",
    width: "100rem",
    justifyContent: "center"
  }
});
const Customers = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container className={classes.grid}>
        <Grid item md={12}>
          <Typography variant="h5" className={classes.typo}>
            For the Latest News, Right to Your Inbox
          </Typography>
          <TextField
            variant="outlined"
            type="email"
            placeholder="Enter your email"
            fullwidth="true"
            className={classes.txtfield}
          />
          <Button variant="outlined" className={classes.button}>
            SUBSCRIBE
          </Button>
          <Grid item md={12} className={classes.avatars}>
            <Avatars />
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

export default Customers;
