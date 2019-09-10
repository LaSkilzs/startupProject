import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NavTable from "./NavTable";
import NavLanding from "./NavLanding";
import NavYale from "./NavYale";
import PlainNav from "./PlainNav";

const Navbar = props => {
  console.log(props);
  console.log("localStorage", localStorage["loggedIn"]);
  return (
    <AppBar
      style={{
        background: "#0072d0"
      }}
    >
      <Toolbar>
        {props.navbar === "Landing Page" || props.navbar === "Logout" ? (
          <NavTable handleNav={props.handleNav} />
        ) : null}
        {props.navbar === undefined || props.navbar === "Immersful Info" ? (
          <NavLanding handleNav={props.handleNav} />
        ) : null}
        {props.navbar === "Yale Project" ? (
          <NavYale handleNav={props.handleNav} />
        ) : null}
        {props.navbar === "Login" ? (
          <PlainNav handleNav={props.handleNav} />
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
