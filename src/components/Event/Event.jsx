import React from "react";
import styled from "styled-components";
import Container from "../common/Container";
import EventCarousel from "../common/EventCarousel";
import Title from "../common/Title";

export default function Event() {
  return (
    <Container size="large">
      <Box>
        <Title text="EVENT" />
        <EventCarousel />
      </Box>
    </Container>
  );
}

const Box = styled.div`
  padding: 50px 30px 60px;
`;
