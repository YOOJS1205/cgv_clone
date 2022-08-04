import React from "react";
import styled from "styled-components";
import Container from "../common/Container";
import CgvLogo from "../../assets/logoRed.png";
import CardImage from "../../assets/card.png";
import Login from "../../assets/loginPassword.png";
import Join from "../../assets/loginJoin.png";
import My from "../../assets/loginMember.png";
import Center from "../../assets/loginCustomer.png";

export default function Header() {
  return (
    <Container>
      <Content>
        <Box>
          <Link to="/">
            <LogoImg src={CgvLogo} alt="cgv 로고" />
            <LogoText>CULTUREPLEX</LogoText>
          </Link>
        </Box>
        <Box>
          <FuncList>
            <Link to="/">
              <EventImage src={CardImage} alt="카드 이벤트 페이지로" />
            </Link>
            <Func>
              <FuncImg src={Login} alt="로그인 페이지로" />
              <FuncText>로그인</FuncText>
            </Func>
            <Func>
              <FuncImg src={Join} alt="회원가입 페이지로" />
              <JoinFuncText>회원가입</JoinFuncText>
            </Func>
            <Func>
              <FuncImg src={My} alt="내 정보 페이지로" />
              <MyFuncText>MY CGV</MyFuncText>
            </Func>
            <Func>
              <CenterFuncImg src={Center} alt="고객센터 페이지로" />
              <FuncText>고객센터</FuncText>
            </Func>
          </FuncList>
        </Box>
      </Content>
    </Container>
  );
}

const Content = styled.div`
  padding: 30px 6px;
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div``;

const Link = styled.a``;

const LogoImg = styled.img`
  width: 117px;
  height: 53px;
`;

const LogoText = styled.span`
  font-size: 16px;
  letter-spacing: 5px;
  color: #222;
`;

const EventImage = styled.img`
  width: 136px;
  height: 39px;
  vertical-align: -40px;
`;

const FuncList = styled.ul`
  display: flex;
`;

const Func = styled.li`
  display: block;
  text-align: right;
  width: 80px;
`;

const FuncImg = styled.img`
  width: 36px;
  height: 36px;
  vertical-align: -30px;
`;

const CenterFuncImg = styled(FuncImg)`
  margin-right: 6px;
`;

const FuncText = styled.p`
  font-size: 13px;
  color: #666666;
`;

const JoinFuncText = styled(FuncText)`
  margin-right: -8px;
`;

const MyFuncText = styled(FuncText)`
  margin-right: -6px;
`;
