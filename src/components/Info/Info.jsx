import React from "react";
import styled from "styled-components";
import Container from "../common/Container";
import BannerImg from "../../assets/Banner.jpg";
import QR from "../../assets/qr.png";

export default function Info() {
  return (
    <Container size="large">
      <Box>
        <Left>
          <Center></Center>
          <Download>
            <DownloadTitle>앱 다운로드</DownloadTitle>
            <DownloadSubTitle>
              CGV앱에서 더 편리하게 이용하세요
            </DownloadSubTitle>
            <Qr src={QR} alt="QR 코드" />
            <BottomText>
              QR코드를 스캔하고<br></br>앱설치 페이지로 바로 이동하세요
            </BottomText>
          </Download>
        </Left>
        <Banner>
          <BannerImage src={BannerImg} alt="배너 사진" />
        </Banner>
      </Box>
    </Container>
  );
}

const Box = styled.div`
  margin-top: 50px;
  padding: 50px 30px 120px;
  display: flex;
  height: 408px;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 735px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
`;

const Center = styled.div`
  width: 513px;
  padding: 24px 26px 20px 30px;
`;

const Download = styled.div`
  width: 222px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const DownloadTitle = styled.p`
  font-size: 16px;
  margin-top: 24px;
`;

const DownloadSubTitle = styled.p`
  font-size: 12px;
  margin-top: 5px;
`;

const Qr = styled.img`
  width: 60px;
  margin: 30px 0;
`;

const BottomText = styled.p`
  font-size: 12px;
  color: #666;
  line-height: 16px;
`;

const Banner = styled.div`
  width: 211px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const BannerImage = styled.img`
  width: 211px;
`;
