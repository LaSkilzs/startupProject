import React from "react";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import formStyles from "../../../assets/js/formStyles";
import { auth, createNewUserAccount } from "../../../firebase";
import firebase from "../../../firebase";
import {
  Typography,
  Button,
  TextField,
  Grid,
  Select,
  MenuItem,
  OutlinedInput
} from "@material-ui/core";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      role: "",
      error: "",
      errorcode: "",
      credential: "",
      errorMessage: ""
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSignup = () => {
    const { email, password } = this.state;
    const user = this.state;
    console.log("heres");
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        createNewUserAccount(user);
        this.props.history.push("/");
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container className={classes.container}>
          <Typography variant="h3" className={classes.header}>
            Signup
          </Typography>
          <Grid item md={12} className={classes.item1}>
            <Button
              variant="outlined"
              className={classes.btn1}
              onClick={() => {
                let provider = new firebase.auth.GoogleAuthProvider();
                auth.signInWithPopup(provider);
                this.props.history.push("/");
              }}
            >
              Signup with Google
            </Button>
          </Grid>
          <Grid item md={12}>
            <div className={classes.div2}>OR</div>
          </Grid>
          <Grid item md={12} className={classes.item2}>
            <TextField
              type="name"
              name="name"
              variant="outlined"
              className={classes.itemname}
              placeholder="Enter your name"
              onChange={e => this.handleChange(e)}
            />
          </Grid>
          <Grid item md={12} className={classes.item2}>
            <TextField
              type="email"
              name="email"
              variant="outlined"
              placeholder="Enter your email"
              className={classes.itemname}
              onChange={e => this.handleChange(e)}
            />
          </Grid>
          <Grid item md={12} className={classes.item2}>
            <TextField
              className={classes.itemname}
              type="password"
              name="password"
              variant="outlined"
              placeholder="Enter your password"
              onChange={e => this.handleChange(e)}
            />
          </Grid>
          <Grid item md={12} className={classes.item2}>
            <Select
              name="role"
              value={this.state.role}
              onChange={e => this.handleChange(e)}
              input={<OutlinedInput name="number of employees" />}
              className={classes.select}
            >
              <MenuItem value="user">
                <em>user</em>
              </MenuItem>
              <MenuItem value="superuser">
                <em>superuser</em>
              </MenuItem>
              <MenuItem value="student">
                <em>student</em>
              </MenuItem>
              <MenuItem value="admin">
                <em>admin</em>
              </MenuItem>
            </Select>
          </Grid>
          <Grid item md={12}>
            <Typography variant="h6" className={classes.typo}>
              By Signing up you agree to our{" "}
              <Link to="/terms">Terms of Services.</Link>
            </Typography>
          </Grid>
          <Grid item md={12} className={classes.item3}>
            <Button
              variant="outlined"
              className={classes.btn2}
              onClick={() => this.handleSignup()}
            >
              SIGNUP
            </Button>
          </Grid>
          <Grid item md={12} className={classes.item4}>
            <Typography variant="h6" className={classes.typo}>
              Have an Account?
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(formStyles)(Signup);
