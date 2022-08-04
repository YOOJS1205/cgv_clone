import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import EventImg from "../../assets/Event.jpg";

export default function EventCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <Arrow />,
    nextArrow: <Arrow />,
  };
  return (
    <Slider {...settings}>
      <Event>
        <EventPic src={EventImg} alt="이벤트 사진입니다." />
        <EventTitle>씨지밤 VIP 인센티브</EventTitle>
        <EventDate>2022.07.13~2022.08.31</EventDate>
      </Event>
      <Event>
        <EventPic src={EventImg} alt="이벤트 사진입니다." />
        <EventTitle>씨지밤 VIP 인센티브</EventTitle>
        <EventDate>2022.07.13~2022.08.31</EventDate>
      </Event>
      <Event>
        <EventPic src={EventImg} alt="이벤트 사진입니다." />
        <EventTitle>씨지밤 VIP 인센티브</EventTitle>
        <EventDate>2022.07.13~2022.08.31</EventDate>
      </Event>
      <Event>
        <EventPic src={EventImg} alt="이벤트 사진입니다." />
        <EventTitle>씨지밤 VIP 인센티브</EventTitle>
        <EventDate>2022.07.13~2022.08.31</EventDate>
      </Event>
      <Event>
        <EventPic src={EventImg} alt="이벤트 사진입니다." />
        <EventTitle>씨지밤 VIP 인센티브</EventTitle>
        <EventDate>2022.07.13~2022.08.31</EventDate>
      </Event>
      <Event>
        <EventPic src={EventImg} alt="이벤트 사진입니다." />
        <EventTitle>씨지밤 VIP 인센티브</EventTitle>
        <EventDate>2022.07.13~2022.08.31</EventDate>
      </Event>
    </Slider>
  );
}

const Event = styled.div`
  width: 310px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
`;

const EventPic = styled.img`
  width: 310px;
  height: 207px;
  object-fit: cover;
`;

const EventTitle = styled.p`
  margin-top: 14px;
  font-size: 14px;
  text-align: left;
  color: black !important;
  margin-right: 24px;
  font-weight: 600;
`;

const EventDate = styled.p`
  margin-top: 4px;
  font-size: 12px;
  color: #666;
`;

const Arrow = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-top: -40px;
  margin-right: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
