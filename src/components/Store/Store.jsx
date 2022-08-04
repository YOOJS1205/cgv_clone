import React from "react";
import styled from "styled-components";
import Container from "../common/Container";
import Item from "./Item";

export default function Store() {
  return (
    <Container size="large">
      <Box>
        <Item title="영화관람권" />
        <Item title="기프트카드" />
        <Item title="콤보" />
      </Box>
    </Container>
  );
}

const Box = styled.div`
  padding: 50px 30px 60px;
  height: 376px;
  display: flex;
  justify-content: space-between;
`;
