import React from "react";
import {
  Typography,
  Button,
  TextField,
  Grid,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  head: {
    marginTop: "6rem",
    fontSize: "3.5rem",
    marginLeft: "18rem",
    margin: "4rem",
    width: "50rem",
    "@media (max-width: 414px)": {
      marginLeft: "12rem"
    }
  },
  subheader: {
    marginLeft: "30rem",
    fontSize: "2.0rem",
    width: "70rem",
    "@media (max-width: 414px)": {
      marginLeft: "25rem"
    }
  },
  div: {
    marginLeft: "36rem",
    "@media (max-width: 414px)": {
      marginLeft: "30rem"
    }
  },
  item2: {
    padding: "0.5rem",
    margin: "0.5rem"
  },
  itemname: {
    width: "30rem",
    fontSize: "2rem"
  },
  txtField: {
    width: "30rem",
    fontSize: "2rem"
  },
  txtField2: {
    width: "30rem",
    fontSize: "2rem"
  },
  btn2: {
    width: "30rem",
    padding: "0.8rem",
    color: "white",
    background: "#ff5900",
    fontWeight: "bold",
    fontSize: "1rem",
    borderRadius: 5,
    margin: 0
  },
  link: {
    margin: "0.5rem",
    textDecoration: "none"
  },
  container: {
    marginBottom: "3rem"
  }
});

const ContactForm = props => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item md={12} style={{ marginLeft: "26rem" }}>
        <Typography variant="h3" className={classes.head}>
          Contact Us
        </Typography>
      </Grid>
      <Grid item md={12}>
        <Typography variant="h5" className={classes.subheader}>
          Fill out the Form and Let us know how we are Doing
        </Typography>
      </Grid>
      <div className={classes.div}>
        <Grid item md={12} className={classes.item2}>
          <TextField
            variant="outlined"
            className={classes.itemname}
            placeholder="Your Email"
          />
        </Grid>
        <Grid item md={12} className={classes.item2}>
          <TextField
            variant="outlined"
            placeholder="Type Subject Here"
            className={classes.itemname}
          />
        </Grid>
        <Grid item md={12} className={classes.item2}>
          <TextField
            variant="outlined"
            placeholder="Type Message Here"
            className={classes.txtField2}
            margin="dense"
            multiline
            rows="10"
          />
        </Grid>
        <Grid item md={12} className={classes.item2}>
          <Button variant="outlined" className={classes.btn2}>
            SEND MESSAGE
          </Button>
        </Grid>
      </div>
    </Grid>
  );
};

export default ContactForm;
