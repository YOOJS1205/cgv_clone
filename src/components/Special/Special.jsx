import React from "react";
import styled from "styled-components";
import Container from "../common/Container";
import Title from "../common/Title";
import special from "../../assets/special1.png";

export default function Special() {
  return (
    <Container size="large">
      <Box>
        <Title text="특별관" />
        <Content>
          <Img src={special} alt="특별관 사진" />
          <List>
            <Item>
              <StrongText>SUITE CINEMA</StrongText>
              <HashTag>#호텔 컨셉의 프리미엄관</HashTag>
            </Item>
            <Item>
              <StrongText>CINE & LIVINGROOM</StrongText>
              <HashTag>#신개념 소셜 상영관</HashTag>
            </Item>
            <Item>
              <StrongText>4DX</StrongText>
              <HashTag>#모션시트 #오감체험</HashTag>
            </Item>
            <Item>
              <StrongText>CINE de CHEF</StrongText>
              <HashTag>#쉐프가 있는 영화관</HashTag>
            </Item>
          </List>
        </Content>
      </Box>
    </Container>
  );
}

const Box = styled.div`
  padding: 50px 30px 60px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 263px;
`;

const Img = styled.img`
  width: 500px;
  height: 263px;
  border-radius: 10px;
`;

const List = styled.ul`
  width: 438px;
  li:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const Item = styled.li`
  height: 64px;
  box-sizing: border-box;
  padding: 19px 25px 19px 19px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  &:hover {
    border-radius: 10px;
    border: 1px solid black;
    strong {
      font-weight: 700;
    }
  }
`;

const StrongText = styled.strong`
  font-size: 18px;
  font-size: 600;
`;

const HashTag = styled.span`
  padding: 2px 7px;
  font-size: 13px;
  color: #666;
  background-color: #f6f6f6;
`;
