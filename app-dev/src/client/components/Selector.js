import React from "react";
import { Select, OutlinedInput, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  select: {
    width: "30rem",
    margin: "5rem"
  }
});
const Selector = props => {
  const classes = useStyles();
  let roomlist = ["room1", "room2"];
  return (
    <Select
      value="your rooms"
      className={classes.select}
      input={<OutlinedInput placeholder="your rooms" />}
    >
      >
      {roomlist.map((list, index) => (
        <MenuItem key={index} value={list}>
          {list}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Selector;
