import React from "react";
import styled from "styled-components";
import Carousel from "../common/Carousel";
import Container from "../common/Container";
import Title from "../common/Title";

export default function Chart() {
  return (
    <Container size="large">
      <Box>
        <Title text="무비차트" />
        <Carousel />
      </Box>
    </Container>
  );
}

const Box = styled.div`
  padding: 50px 30px 60px;
`;
