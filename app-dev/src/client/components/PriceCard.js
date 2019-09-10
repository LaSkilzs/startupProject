import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Button,
  List,
  Divider,
  Grid,
  makeStyles
} from "@material-ui/core";
import PriceList from "./PriceList";
import pricecharts from "../js/PriceCharts";

const useStyles = makeStyles({
  item: {
    display: "flex",
    textAlign: "center"
  },
  card: {
    width: "30rem",
    height: "35rem",
    margin: "1rem"
  },
  button: {
    color: "white",
    background: "#ff5900",
    fontWeight: "bold",
    fontSize: "0.5rem",
    borderRadius: 10,
    width: "10vw"
  },
  content: {
    margin: "auto"
  },
  navlink: {
    textDecoration: "none"
  }
});

const PriceCard = props => {
  const classes = useStyles();
  return (
    <Grid item md={12} className={classes.item}>
      {pricecharts.map((pricing, idx) => (
        <Card key={idx} className={classes.card}>
          <CardContent>
            <h1>{pricing.title}</h1>
            <h4>{pricing.usertype}</h4>
            <Link to="/signup" className={classes.navlink}>
              <Button className={classes.button} variant="outlined">
                SIGNUP TODAY
              </Button>
            </Link>
          </CardContent>
          <CardContent>
            <Divider />
            <h1>{pricing.user}</h1>
            <Divider />
          </CardContent>
          <CardContent className={classes.content}>
            <List>
              <PriceList features={pricing.features} />
            </List>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default PriceCard;
