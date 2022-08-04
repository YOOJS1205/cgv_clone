import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/reset.css";
import "./styles/app.css";
import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/MenuBar";
import Banner from "./components/Banner/Banner";
import Chart from "./components/Chart/Chart";
import Event from "./components/Event/Event";
import Special from "./components/Special/Special";
import Store from "./components/Store/Store";
import Info from "./components/Info/Info";
import BottomBanner from "./components/BottomBanner/BottomBanner";

export default function App() {
  return (
    <>
      <Header />
      <MenuBar />
      <Banner />
      <Chart />
      <Event />
      <Special />
      <Store />
      <Info />
      <BottomBanner />
    </>
  );
}
