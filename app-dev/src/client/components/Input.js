import React from "react";
import { TextField } from "@material-ui/core";

const Input = props => {
  let name = props.name || "Enter Props";
  return (
    <TextField
      placeholder="input field"
      variant="outlined"
      placeholder={name}
      style={{ marginTop: "1rem" }}
    ></TextField>
  );
};

export default Input;
