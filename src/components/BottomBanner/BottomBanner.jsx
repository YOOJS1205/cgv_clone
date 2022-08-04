import React from "react";
import styled from "styled-components";
import BannerImage from "../../assets/bottom_banner.png";

export default function BottomBanner() {
  return (
    <BannerContainer>
      <BannerImg src={BannerImage} alt="하단 배너" />;
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  background-color: #ffa443;
  height: 240px;
  text-align: center;
`;

const BannerImg = styled.img`
  height: 240px;
  object-fit: contain;
`;
