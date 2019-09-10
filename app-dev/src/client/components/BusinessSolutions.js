import React from "react";
import { List, ListItem, Typography, makeStyles } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckIcon from "@material-ui/icons/Check";
import priceCharts from "../js/PriceCharts";

const useStyles = makeStyles({
  typo: {
    fontWeight: "bold",
    marginBottom: "1rem"
  },
  list: {}
});
const BusinessSolutions = props => {
  let businessPrice = priceCharts.filter(
    pricing => pricing.title === "Enterprise"
  );
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <Typography variant="h5" className={classes.typo}>
        All Enterprise Solutions include:
      </Typography>
      {businessPrice[0].features.map((feature, idx) => (
        <ListItem key={idx}>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          {feature}
        </ListItem>
      ))}
    </List>
  );
};

export default BusinessSolutions;
