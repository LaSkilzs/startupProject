import React from "react";
import { Link } from "react-router-dom";
import firebase from "../../../firebase";
import withStyles from "@material-ui/core/styles/withStyles";
import formStyles from "../../../assets/js/formStyles";
import { Typography, Button, TextField, Grid } from "@material-ui/core";
import { auth } from "../../../firebase";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", error: "" };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleEmailLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        localStorage.setItem("loggedIn", true);
        console.log(this.props.handleNav("Immersive Info"));
        this.props.history.push("/userdash");
      })
      .catch(error => {
        this.setState({
          error: error
        });
      });
  };

  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <Grid container className={classes.root}>
        <Typography variant="h3" className={classes.head}>
          Login
        </Typography>

        <Grid container className={classes.container}>
          <Grid item md={12} className={classes.item1}>
            <Button
              variant="outlined"
              className={classes.btn1}
              onClick={e => {
                let provider = new firebase.auth.GoogleAuthProvider();
                auth.signInWithPopup(provider);
                localStorage.setItem("loggedIn", true);
                this.props.handleNav("Immersive Info");
                this.props.history.push("/userdash");
              }}
            >
              Login with Google
            </Button>
          </Grid>
          <Grid item md={12}>
            <div className={classes.div}>
              <hr className={classes.hr} /> or
              <hr className={classes.hr} />
            </div>
          </Grid>
          <Grid item md={12} className={classes.item2}>
            <TextField
              className={classes.itemname}
              value={this.state.email}
              type="email"
              name="email"
              variant="outlined"
              placeholder="Enter your email"
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

          <Grid item md={12} className={classes.item3}>
            <Button
              variant="outlined"
              className={classes.btn2}
              onClick={() => this.handleEmailLogin()}
            >
              Login with Email
            </Button>
          </Grid>
          <Grid item md={12} className={classes.item4}>
            <Typography variant="h6" className={classes.typo}>
              New to Immersful?
              <Link to="/signup" className={classes.link}>
                Sign Up Today
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(formStyles)(Login);
