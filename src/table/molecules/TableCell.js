import React from "react";
import styled from "styled-components";
const TableCellStyle = styled.div`
  min-width: 200px;

  @media (max-width: 768px) {
  }
  @media (max-width: 500px) {
  }
  @media (max-width: 250px) {
    min-width: 100px;
    max-width: 250px;
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

export const TableCell = props => {
  let columnContent = props.columnName ? props.columnName + " " : null;
  let columnName = <Label>{columnContent}</Label>;

  return (
    <TableCellStyle title={columnContent + props.children}>
      {columnName}
      {props.children}
    </TableCellStyle>
  );
};
