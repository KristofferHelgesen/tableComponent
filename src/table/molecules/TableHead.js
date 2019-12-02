import React from "react";
import styled from "styled-components";

const TableRowStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  flex-wrap: wrap;
  /*background-image: linear-gradient(#f7f7f7, #f7f7f7);*/
  border-bottom: 1px solid #d3d3d3;
  width: 80%;

  background-color: ${props => {
    return props.loading == "true" ? "rgb(221, 221, 221)" : "#f7f7f7";
  }};
  color: ${props => {
    return props.loading == "true" ? "white" : "black";
  }};

  position: fixed;

  @media (max-width: 768px) {
  }
`;
export const TableHead = props => {
  const loading = props.loading;

  return (
    <TableRowStyle loading={loading.toString()}>{props.children}</TableRowStyle>
  );
};
