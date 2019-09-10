import React from "react";
import Navbar from "./client/components/Navbar";
import { Grid } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import NoMatch from "./client/js/NoMatch";
import routes from "./Routes";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      navbar: "Landing Page"
    };
  }

  handleNav = navbar => {
    console.log(navbar);
    if (navbar.name === "Logout") {
      localStorage.setItem("loggedIn", false);
      this.setState({ navbar: navbar.name, loggedIn: !this.state.loggedIn });
    } else {
      this.setState({ navbar: navbar.name });
    }
  };

  render() {
    console.log("App", this.state.navbar);
    return (
      <Grid container style={{ margin: "0 auto" }}>
        <Navbar
          navbar={this.state.navbar}
          loggedIn={this.state.loggedIn}
          handleNav={this.handleNav}
        />
        <Switch>
          {routes.map(({ path, exact, component: C, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={routerProps => (
                <C handleNav={this.handleNav} {...routerProps} {...rest} />
              )}
            />
          ))}
          {/* <PrivateRoute exact path="/login-yale" component={YaleLogin} />
          <PrivateRoute exact path="/userDash" component={UserDashboard} />
          <PrivateRoute exact path="/profile" component={Profile} /> */}
          <Route render={props => <NoMatch {...props} />} />
        </Switch>
      </Grid>
    );
  }
}

export default App;
