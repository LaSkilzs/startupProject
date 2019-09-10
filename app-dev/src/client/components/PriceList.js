import React from "react";
import { ListItem } from "@material-ui/core";

const PriceList = props => {
  return (
    <React.Fragment>
      {props.features.map((feature, idx) => (
        <ListItem key={idx}>{feature}</ListItem>
      ))}
    </React.Fragment>
  );
};

export default PriceList;
