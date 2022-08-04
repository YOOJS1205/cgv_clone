import React from "react";
import styled from "styled-components";

export default function Title({ text }) {
  return <TitleText>{text}</TitleText>;
}

const TitleText = styled.h2`
  color: #222;
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 25px;
`;
