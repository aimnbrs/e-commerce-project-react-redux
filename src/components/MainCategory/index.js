import React, { Fragment } from "react";
import "./index.css";
import MainFeature from "./../../microComponents/MainFeature";
import WraperCategory from "../../microComponents/WraperCategory";
import banner01 from "./banner-01.jpg";
import banner02 from "./banner-02.jpg";
import banner03 from "./banner-03.jpg";

const MainCategory = (props) => {
  return (
    <Fragment>
      <WraperCategory>
        <MainFeature
          url={banner01}
          name="WOMAN"
          classname="women"
          session="spring 2019"
        />
        <MainFeature
          url={banner02}
          name="MEN"
          classname="men"
          session="spring 2019"
        />
        <MainFeature
          url={banner03}
          name="ACCESSOIRIES"
          classname="accessoiries"
          session="New Trend"
        />
      </WraperCategory>
    </Fragment>
  );
};

export default MainCategory;
