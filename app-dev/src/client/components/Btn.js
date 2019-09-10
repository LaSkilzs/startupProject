import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    // color: "white",
    // background: "#ff5900",
    // fontWeight: "bold",
    // fontSize: "1rem",
    // borderRadius: 5,
    // width: "10vw"
  }
});

const Btn = props => {
  let name = props.name || "ENTER NAME";
  const classes = useStyles();
  return (
    <Button variant="outlined" className={classes.root}>
      {name}
    </Button>
  );
};

export default Btn;
