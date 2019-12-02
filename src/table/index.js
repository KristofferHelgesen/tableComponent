import React, { useState } from "react";
import styled from "styled-components";
import { TableHead } from "./molecules/TableHead";
import { TableRow } from "./molecules/TableRow";
import { TableCell } from "./molecules/TableCell";
import { TableHeadCell } from "./molecules/TableHeadCell";

const Table = props => {
  const tableHead = props.tableHead.label;
  let tableHeadLength = tableHead.length;
  const json = props.json;
  const lastSorted = props.lastSorted;
  const lastSortedDirection = props.lastSortedDirection;
  let maxNumberOfCellsWidth = 0;

  //Gets the max number of cells in any row
  for (let i = 0; i <= json.length - 1; i++) {
    let currentObjCellsLength = json[i].cells.length;
    if (currentObjCellsLength > maxNumberOfCellsWidth) {
      maxNumberOfCellsWidth = currentObjCellsLength;
    }
  }

  //Handles if there is a cell that is missing vs the maxNumberOfCellsWidth
  for (let i = 0; i <= json.length - 1; i++) {
    let currentObjCellsLength = json[i].cells.length;

    if (currentObjCellsLength != maxNumberOfCellsWidth) {
      for (
        currentObjCellsLength;
        currentObjCellsLength <= maxNumberOfCellsWidth - 1;
        currentObjCellsLength++
      ) {
        json[i].cells.push({ cellValue: "" });
      }
    }
  }

  //Handles if there is a cell that is missing vs the maxNumberOfCellsWidth  (HEAD)
  if (maxNumberOfCellsWidth != tableHeadLength) {
    let diff = maxNumberOfCellsWidth - tableHeadLength;

    for (
      tableHeadLength;
      tableHeadLength <= maxNumberOfCellsWidth - 1;
      tableHeadLength++
    ) {
      tableHead.push({ cellValue: "" });
    }
  }

  let TableHeadVar = (
    <TableHead loading={props.loading}>
      {tableHead.map((cell, i) => {
        return (
          <TableHeadCell
            lastSorted={lastSorted}
            key={"head-cell-" + Math.random()}
            sortFunction={props.sortFunction}
            index={i}
            lastSortedDirection={lastSortedDirection}
          >
            {cell.cellValue}
          </TableHeadCell>
        );
      })}
    </TableHead>
  );

  let TableContent = json.map(cell => (
    <TableRow key={"row-" + Math.random()}>
      {cell.cells.map((value, i) => {
        let columnName = tableHead[i] ? tableHead[i].cellValue : "";
        return (
          <TableCell columnName={columnName} key={"cell-" + Math.random()}>
            {value.cellValue}
          </TableCell>
        );
      })}
    </TableRow>
  ));

  return (
    <TableContainer>
      {TableHeadVar}
      <div style={{ paddingTop: "42px" }}>{TableContent}</div>
    </TableContainer>
  );
};
const TableContainer = styled.div`
  width: 80%;
  margin: auto;
`;

export default Table;
