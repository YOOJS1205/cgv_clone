import React, { useState } from "react";
import styled from "styled-components";
import Container from "../common/Container";
import Detail from "./Detail";

export default function MenuBar() {
  const [onEnter, setOnEnter] = useState(false);

  function onFocusMenuBar() {
    setOnEnter((state) => !state);
  }

  function onLeaveMenuBar() {
    setOnEnter((state) => !state);
  }

  return (
    <Container size="full">
      <Box>
        <MenuList onMouseEnter={onFocusMenuBar} onMouseLeave={onLeaveMenuBar}>
          <Menu>영화</Menu>
          <Menu>극장</Menu>
          <RedMenu>예매</RedMenu>
          <Menu>스토어</Menu>
          <Menu>이벤트</Menu>
          <Menu>혜택</Menu>
        </MenuList>
        <SearchBox>
          <Search />
        </SearchBox>
      </Box>
      <Detail onEnter={onEnter} />
    </Container>
  );
}

const Box = styled.div`
  height: 50px;
  padding: 0 5px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 0 calc((100vw - 980px) / 2);
  border-bottom: 2px solid red;
  position: sticky;
`;

const MenuList = styled.ul`
  display: flex;
`;

const Menu = styled.li`
  width: 80px;
  font-size: 16px;
  line-height: 50px;
`;

const RedMenu = styled(Menu)`
  color: red;
`;

const SearchBox = styled.div`
  &::before,
  &::after {
    display: inline-block;
    content: "";
    background-color: #cacaca;
    width: 1px;
    height: 24px;
  }
  &::before {
    margin-right: 7px;
  }
  &::after {
    margin-left: 7px;
  }
  line-height: 60px;
`;

const Search = styled.input`
  border: none;
  background-color: #fff;
  width: 180px;
  font-size: 16px;
  height: 24px;
  vertical-align: 7px;
`;
