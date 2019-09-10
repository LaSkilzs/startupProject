import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import FooterTable from "../components/FooterTable";

const useStyles = makeStyles({
  grid: {
    background: "#0072d0",
    height: "5rem",
    width: "100rem",
    marginTop: "2rem"
  }
});
const Footer = props => {
  const classes = useStyles();
  return (
    <Grid container className={classes.grid}>
      <FooterTable />
    </Grid>
  );
};

export default Footer;
