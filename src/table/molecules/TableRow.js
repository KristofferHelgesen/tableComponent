import React from "react";
import styled from "styled-components";

const TableRowStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  flex-wrap: wrap;
  background-color: #ffffff;
  border-bottom: 1px solid #d3d3d3;
  width: 100%;
  @media (max-width: 768px) {
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
  @media (max-width: 250px) {
    align-items: flex-start;
  }
`;
export const TableRow = props => {
  return <TableRowStyle>{props.children}</TableRowStyle>;
};
