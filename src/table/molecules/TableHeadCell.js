import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { arrowUp, arrowDown } from "./atoms/icons";

const TableCellStyle = styled.div`
  width: 200px;
  cursor: pointer;
  display: flex;
  align-items: center;

  color: ${props => {
    return props.lastSorted == props.index
      ? "black"
      : props.lastSorted === null
      ? "black"
      : "rgb(221, 221, 221)";
  }};
  @media (max-width: 768px) {
    width: 100px;
  }
  @media (max-width: 500px) {
    width: 50px;
  }
  @media (max-width: 250px) {
  }
`;

const Label = styled.span`
  display: none;
  @media (max-width: 768px) {
    display: inline;
  }
  @media (max-width: 250px) {
    display: block;
  }
`;

export const TableHeadCell = props => {
  let index = props.index;
  let sortFunction = props.sortFunction;
  let columnContent = props.columnName ? props.columnName + " " : null;
  let columnName = <Label>{columnContent}</Label>;
  let lastSorted = props.lastSorted;
  let lastSortedDirection = props.lastSortedDirection;

  const handleMultipleClickFunction = index => {
    sortFunction(index);
  };
  console.log(lastSortedDirection);
  const icon =
    lastSorted === index
      ? lastSortedDirection === "asc"
        ? arrowUp
        : arrowDown
      : null;
  console.log(icon);
  return (
    <TableCellStyle
      lastSorted={lastSorted}
      index={index}
      onClick={() => handleMultipleClickFunction(index)}
      title={props.children}
    >
      {columnName}

      {props.children}
      {icon}
    </TableCellStyle>
  );
};
