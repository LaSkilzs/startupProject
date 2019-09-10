import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import { signOut } from "../../firebase";
import DevNavBarChange from "./DevNavBarChange";

const useStyles = makeStyles({
  table: {
    width: "100rem"
  },

  tablecell: {
    padding: 0,
    color: "white",
    fontSize: "1.5rem",
    borderBottom: "none"
  },
  header: {
    fontFamily: "Raleway, sans-serif"
  },
  button: {
    color: "white",
    background: "#ff5900",
    fontWeight: "bold",
    fontSize: "1.5rem",
    padding: ".3rem",
    marginLeft: "10rem",
    borderRadius: 5,
    width: "15rem",
    "@media (max-width: 420px)": {
      width: "10rem",
      fontSize: "0.8rem"
    }
  },
  navlink: {
    textDecoration: "none"
  }
});

const PlainNav = props => {
  const classes = useStyles();
  return (
    <Table className={classes.table}>
      <TableBody>
        <TableRow>
          <TableCell align="left" className={classes.tablecell}>
            <Typography variant="h3" className={classes.header}>
              Welcome to Immersful
            </Typography>
          </TableCell>
          <TableCell align="center" className={classes.tablecell}>
            <DevNavBarChange handleNav={props.handleNav} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default PlainNav;
