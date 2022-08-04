import React, { useState } from "react";
import styled from "styled-components";
import Container from "../common/Container";
import Item from "./Item";

export default function Detail({ onEnter }) {
  const [isEnter, setIsEnter] = useState(false);

  function onEnterDetail() {
    setIsEnter(true);
  }

  function onLeaveDetail() {
    setIsEnter(false);
  }
  return (
    <Container size="full">
      <Box
        onEnter={onEnter}
        isEnter={isEnter}
        onMouseEnter={onEnterDetail}
        onMouseLeave={onLeaveDetail}
      >
        <Content>
          <Item itemList={["영화", "무비차트", "아트하우스", "ICECON"]} />
          <Item itemList={["극장", "CGV극장", "특별관"]} />
          <Item
            itemList={[
              "예매",
              "빠른예매",
              "상영스케쥴",
              "English Ticketing",
              "English Schedule",
            ]}
          />
          <Item
            itemList={[
              "스토어",
              "영화관람권",
              "기프트카드",
              "콤보",
              "팝콘",
              "음료",
              "스낵",
              "플레이존",
              "씨네샵",
            ]}
          />
          <Item
            itemList={[
              "이벤트",
              "SPECIAL",
              "영화/예매",
              "멤버십/CLUB",
              "CGV 극장별",
              "제휴할인",
              "당첨자 발표",
              "종료된 이벤트",
            ]}
          />
          <Item
            itemList={["혜택", "CGV 할인정보", "CLUB 서비스", "VIP 라운지"]}
            isLast={true}
          />
        </Content>
      </Box>
    </Container>
  );
}

const Box = styled.div`
  position: absolute;
  width: 100%;
  display: ${(props) => (props.onEnter || props.isEnter ? "flex" : "none")};
  background-color: #fff;
`;

const Content = styled.div`
  margin: 0 auto;
  display: flex;
  width: 980px;
  ul:not(:first-child) {
    padding-left: 20px;
  }
`;
