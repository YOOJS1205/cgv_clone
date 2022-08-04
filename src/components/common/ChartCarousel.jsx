import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import first from "../../assets/1.jpg";

export default function ChartCarousel({ movieList }) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <Arrow />,
    nextArrow: <Arrow />,
  };

  return (
    <Slider {...settings}>
      {movieList.map((item, index) => (
        <Movie key={item.rnum}>
          <MovieImg src={first} alt={`${index}위`} />
          <Rank>{item.rnum}</Rank>
          <MovieTitle>{item.movieNm}</MovieTitle>
        </Movie>
      ))}
    </Slider>
  );
}

const Movie = styled.div`
  width: 170px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
`;

const MovieImg = styled.img`
  width: 170px;
  height: 234px;
  object-fit: cover;
`;

const Rank = styled.p`
  color: #fff;
  position: absolute;
  font-size: 50px;
  bottom: 65px;
`;

const MovieTitle = styled.p`
  margin-top: 14px;
  font-size: 14px;
  text-align: center;
  color: black !important;
  margin-right: 24px;
  font-weight: 600;
`;

const Arrow = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-top: -20px;
  margin-right: 27px;
  background-color: rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
