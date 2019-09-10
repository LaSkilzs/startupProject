import React, { Component } from "react";
import Home from "../web/components/HomeLanding";
import Services from "./Services";
import Pricing from "./Pricing";
import Customers from "../web/components/Customers";
import SpecialOfferings from "../web/components/SpecialOfferings";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Home />
        <Services />
        <Pricing />
        <SpecialOfferings />
        <Customers />
      </div>
    );
  }
}

export default LandingPage;
