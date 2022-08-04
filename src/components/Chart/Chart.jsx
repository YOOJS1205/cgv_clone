import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ChartCarousel from "../common/ChartCarousel";
import Container from "../common/Container";
import Title from "../common/Title";

export default function Chart() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    (async function getMovieData() {
      const url =
        "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=dc536f2d6adc7af4fb76b2d8987143c4&targetDt=20220701";
      const res = await axios.get(url);
      setMovieList(res.data.boxOfficeResult.weeklyBoxOfficeList);
    })();
  }, []);
  return (
    <Container size="large">
      <Box>
        <Title text="무비차트" />
        <ChartCarousel movieList={movieList} />
      </Box>
    </Container>
  );
}

const Box = styled.div`
  padding: 50px 30px 60px;
`;
