import React from "react";
import { List, ListItem } from "@material-ui/core";

const CardNav = props => {
  return (
    <List>
      <ListItem>Account</ListItem>
      <ListItem>Subscription</ListItem>
      <ListItem>Privacy</ListItem>
      <ListItem>Logout</ListItem>
    </List>
  );
};

export default CardNav;
