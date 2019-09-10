import React from "react";
import ContactForm from "../components/ContactForm";
import { Grid } from "@material-ui/core";
import Footer from "./Footer";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <ContactForm />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
