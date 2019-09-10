import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import { signOut } from "../../firebase";

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
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default PlainNav;
