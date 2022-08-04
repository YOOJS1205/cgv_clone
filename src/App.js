import React from "react";
import "./styles/reset.css";
import "./styles/app.css";
import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/MenuBar";
import Banner from "./components/Banner/Banner";
import Chart from "./components/Chart/Chart";

export default function App() {
  return (
    <>
      <Header />
      <MenuBar />
      <Banner />
      <Chart />
    </>
  );
}
