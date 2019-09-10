import React from "react";
import { Grid, Button, makeStyles, Card, CardContent } from "@material-ui/core";
import PriceHeader from "../components/PriceHeader";

const useStyles = makeStyles({
  button: {
    color: "white",
    background: "#ff5900",
    fontWeight: "bold",
    fontSize: "1rem",
    padding: ".5rem",
    borderRadius: 5,
    width: "10rem",
    marginBottom: "10rem"
  },
  card: {
    textAlign: "center"
  },
  h5: {
    fontSize: "1rem"
  },
  item: {
    marginBottom: "1rem"
  },
  container: {
    width: "100rem"
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
    title: "Small Group",
    monthlyprice: "$14.99/monthly",
    annualprice: "$149.99/annual fee",
    summary: "Lorem ipsum dolor sit amet."
  },
  {
    logo: <i className="fas fa-users"></i>,
    title: "Team",
    monthlyprice: "$34.99/monthly",
    annualprice: "$349.00/annual fee",
    summary: "Lorem ipsum dolor sit amet."
  },
  {
    logo: <i className="far fa-building"></i>,
    title: "Enterprise",
    monthlyprice: "call for pricing",
    annualprice: "call for pricing",
    summary: "Lorem ipsum dolor sit amet."
  }
];

const Pricing = props => {
  const classes = useStyles();
  const price = priceCard.map((card, idx) => {
    return (
      <Grid className={classes.item} item xs={6} md={3} key={idx}>
        <Card className={classes.card}>
          <CardContent style={{ alignContent: "center" }}>
            <div style={{ marginTop: "2rem" }}>{card.logo}</div>
            <h1>{card.title}</h1>
            <h5 className={classes.h5}>{card.monthlyprice}</h5>
            <h5 className={classes.h5}>{card.summary}</h5>
            <Button variant="outlined" className={classes.button}>
              TRY FOR FREE
            </Button>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <div className={classes.container}>
      <PriceHeader />
      <Grid container spacing={3}>
        {price}
      </Grid>
    </div>
  );
};

export default Pricing;
