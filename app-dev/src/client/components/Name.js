import React from "react";
import { Typography } from "@material-ui/core";

const Name = props => {
  let name = props.name || "Enter Name";
  return (
    <React.Fragment>
      <Typography style={{ textAlign: "center", fontSize: "1.5rem" }}>
        {name}
      </Typography>
    </React.Fragment>
  );
};

export default Name;
