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
    width: "100rem"
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
    background: "#71a3cc",
    fontWeight: "bold",
    fontSize: "1rem",
    borderRadius: 5,
    width: "10vw"
  },
  header: {
    fontFamily: "Raleway, sans-serif",
    textTransform: "uppercase"
  },
  navlink: {
    textDecoration: "none"
  }
});

const NavYale = props => {
  console.log(props);
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
            Yale
          </TableCell>
          <TableCell align="center" className={classes.tablecell}>
            <Link to="/dashboard-yale" className="navlink">
              Dashboard
            </Link>
          </TableCell>
          <TableCell align="center" className={classes.tablecell}>
            <Link to="room-yale" className="navlink">
              Room
            </Link>
          </TableCell>
          <TableCell align="right" className={classes.tablecell}>
            <DevNavBarChange handleNav={props.handleNav} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default NavYale;
