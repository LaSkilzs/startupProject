import React from "react";
import { Grid, Button, makeStyles, Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    color: "white",
    background: "#ff5900",
    fontWeight: "bold",
    fontSize: "1rem",
    padding: ".5rem",
    borderRadius: 20,
    width: "10rem"
  },
  card: {
    height: "30rem",
    textAlign: "center",
    width: "20rem",
    margin: "3rem"
  },
  h5: {
    fontSize: "1rem"
  },
  cont: {
    height: "30vh"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 768px)": {
      marginLeft: "10rem"
    }
  }
});
const priceCard = [
  {
    logo: <i className="fas fa-user-plus"></i>,
    title: "Individual",
    monthlyprice: "Free",
    annualprice: "Free",
    summary: "Lorem ipsum dolor sit amet."
  },
  {
    logo: <i className="fas fa-user-friends"></i>,
    title: "Best Value",
    monthlyprice: "$14.99/monthly",
    annualprice: "$149.99/annual fee",
    summary: "Lorem ipsum dolor sit amet."
  },
  {
    logo: <i className="fas fa-users"></i>,
    title: "Premium",
    monthlyprice: "$34.99/monthly",
    annualprice: "$349.00/annual fee",
    summary: "Lorem ipsum dolor sit amet."
  }
];

const UserPricing = props => {
  const classes = useStyles();
  const price = priceCard.map((card, idx) => {
    return (
      <Card className={classes.card} key={idx}>
        <CardContent>
          <div>{card.logo}</div>
          <h1>{card.title}</h1>
          <h5 className={classes.h5}>{card.monthlyprice}</h5>
          <h5 className={classes.h5}>{card.summary}</h5>
          <Button variant="outlined" className={classes.button}>
            Upgrade
          </Button>
        </CardContent>
      </Card>
    );
  });

  return (
    <Grid item className={classes.container}>
      {price}
    </Grid>
  );
};

export default UserPricing;
