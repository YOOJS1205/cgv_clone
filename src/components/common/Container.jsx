import React from "react";
import styled from "styled-components";

export default function Container({ children, size }) {
  return <Box size={size}>{children}</Box>;
}

const Box = styled.div`
  margin: 0 auto;
  max-width: ${(props) =>
    props.size === "full"
      ? "100%"
      : props.size === "large"
      ? "1040px"
      : "980px"};
  width: 100%;
`;
