import React from "react";
import {
  TextField,
  Button,
  Select,
  makeStyles,
  MenuItem,
  InputLabel
} from "@material-ui/core";
import OutlinedInput from "@material-ui/core/OutlinedInput";
const useStyles = makeStyles({
  form: {
    padding: "0.7rem",
    fontSize: "0.7rem",
    marginTop: "0.1rem",
    width: "30rem"
  },
  select: {
    width: "30rem",
    marginLeft: "1rem",
    fontSize: "0.7rem",
    marginTop: "0.1rem"
  },
  button: {
    padding: "1rem",
    fontSize: "1rem",
    marginTop: "1.4rem",
    width: "30rem",
    marginLeft: "1rem",
    color: "white",
    background: "#ff5900",
    fontWeight: "bold",
    borderRadius: 5,
    marginBottom: "3rem"
  },
  input: {
    marginLeft: "1rem",
    marginTop: "1rem"
  }
});
const Form = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <TextField
        variant="outlined"
        placeholder="work email"
        className={classes.form}
      ></TextField>
      <TextField
        variant="outlined"
        placeholder="company name"
        className={classes.form}
      ></TextField>
      <TextField
        variant="outlined"
        placeholder="first name"
        className={classes.form}
      ></TextField>
      <TextField
        variant="outlined"
        placeholder="last name"
        className={classes.form}
      ></TextField>
      <TextField
        variant="outlined"
        placeholder="country"
        className={classes.form}
      ></TextField>
      <InputLabel htmlFor="number of employees" className={classes.input}>
        Number of Employees
      </InputLabel>
      <Select
        value="none"
        input={<OutlinedInput name="number of employees" />}
        className={classes.select}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
      </Select>
      <Button variant="outlined" className={classes.button}>
        SUBMIT
      </Button>
    </React.Fragment>
  );
};

export default Form;
