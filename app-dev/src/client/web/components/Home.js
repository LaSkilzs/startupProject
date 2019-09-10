import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import home21 from "../../.././assets/images/home2.png";
import Footer from "../../containers/Footer";

const useStyles = makeStyles({
  root: {
    flexWrap: "nowrap",
    justifyItems: "center"
  },
  content: {
    marginTop: "15rem",
    marginLeft: "10rem",
    "@media (max-width: 375px)": {
      width: "30rem"
    }
  },
  h3: {
    fontSize: "5rem",
    letterSpacing: ".5",
    "@media (max-width: 375px)": {
      fontSize: "4rem"
    }
  },
  button: {
    color: "white",
    background: "#ff5900",
    fontWeight: "bold",
    fontSize: "1.5rem",
    padding: ".8rem",
    marginLeft: "10rem",
    borderRadius: 5,
    width: "15rem",
    "@media (max-width: 420px)": {
      width: "10rem",
      fontSize: "0.8rem"
    }
  },
  para: {
    fontSize: "1.2rem",
    letterSpacing: ".7"
  },
  img: {
    width: "45rem",
    marginLeft: "10rem",
    marginTop: "5rem",
    margin: "auto",
    "@media (max-width: 375px)": {
      width: "35rem"
    }
  },
  navlink: {
    textDecoration: "none"
  }
});

const Home = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={2} className={classes.root}>
        <Grid item md={4} className={classes.content}>
          <Typography variant="h3" className={classes.h3}>
            Video Conferencing
          </Typography>
          <p className={classes.para}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ipsa
            fugit culpa fuga pariatur aut numquam nisi deleniti voluptatum id,
            velit in quasi quibusdam laudantium quisquam quae obcaecati saepe
            officiis.
          </p>
          <Link to="/price-cards" className={classes.navlink}>
            <Button variant="outlined" className={classes.button}>
              LEARN MORE
            </Button>
          </Link>
        </Grid>
        <Grid item md={8}>
          <img src={home21} alt="home21" className={classes.img} />
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
