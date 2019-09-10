import React from "react";
import { makeStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import DevNavBarChange from "./DevNavBarChange";

const useStyles = makeStyles({
  table: {
    width: "100rem",
    "@media (max-width: 1024px)": {
      width: "90rem"
    },
    "@media (max-width: 375px)": {
      width: "80rem"
    }
  },
  tablebody: {},
  tablecell: {
    padding: 0,
    color: "white",
    textAlign: "center",
    fontSize: "1.5rem",
    borderBottom: "none"
  },
  button: {
    color: "white",
    background: "#d2e4ec",
    fontWeight: "bold",
    fontSize: "1rem",
    borderRadius: 5,
    width: "10vw"
  },
  header: {
    fontFamily: "Raleway, sans-serif",
    textDecoration: "uppercase",
    textTransform: "uppercase"
  },
  navlink: {
    textDecoration: "none",
    color: "white"
  }
});

const NavLanding = props => {
  const classes = useStyles();
  return (
    <Table className={classes.table}>
      <TableBody>
        <TableRow>
          <TableCell align="left" className={classes.tablecell}>
            <Typography variant="h3" className={classes.header}>
              Immersful
            </Typography>
          </TableCell>
          <TableCell align="center" className={classes.tablecell}>
            <Link to="/userdash" className={classes.navlink}>
              Dashboard
            </Link>
          </TableCell>
          <TableCell align="center" className={classes.tablecell}>
            <Link to="/profile" className={classes.navlink}>
              Profile
            </Link>
          </TableCell>
          <TableCell align="center" className={classes.tablecell}>
            <Link to="/contact" className={classes.navlink}>
              Contact
            </Link>
          </TableCell>
          <TableCell>
            <DevNavBarChange handleNav={props.handleNav} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default NavLanding;
