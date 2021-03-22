import React, { Fragment, useState } from "react";
import "./index.css";
import Jambatron from "./../../components/Jambatron";
import MainCategory from "../../components/MainCategory";
import ProductOverView from "../../components/ProductOverView";
import ImageGalery from "../../components/ImageGalery";





function Home(props) {
  return (
    <Fragment>
      <Jambatron />
      <MainCategory />
      <ProductOverView />
      <ImageGalery />
    </Fragment>
  );
}

export default Home;
