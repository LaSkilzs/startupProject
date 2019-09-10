import React from "react";

const PriceTable = props => {
  return (
    <Table className={classes.table}>
      <TableBody>
        <TableRow>
          <TableCell>{props.image}</TableCell>
          <TableCell>{props.title}</TableCell>
          <TableCell>{props.price}</TableCell>
          <TableCell>{props.summary}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default PriceTable;
