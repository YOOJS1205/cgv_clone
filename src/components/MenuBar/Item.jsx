import React from "react";
import styled, { css } from "styled-components";

export default function Item({ itemList, isLast }) {
  return (
    <Box isLast={isLast}>
      {itemList.map((item) => (
        <Element key={item}>{item}</Element>
      ))}
    </Box>
  );
}

const Box = styled.ul`
  li:first-child {
    font-weight: 600;
  }
  margin: 15px 0;
  font-size: 13px;
  text-align: left;
  width: 150px;
  ${(props) =>
    !props.isLast
      ? css`
          border-right: 1px solid #cacaca;
        `
      : null}
`;

const Element = styled.li`
  padding: 5px 0;
`;
