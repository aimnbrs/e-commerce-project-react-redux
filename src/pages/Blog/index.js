import React, { Fragment } from "react";
import BlogDetails from "../../components/BlogDetails";
import ProductMin from "../../components/BlogMin";

import "./index.css";

export default function Blog() {
  const categoryStyle = {
    margin: " 0 auto 0 auto",
    // padding: "5px 0 5px 0",
    borderBottom: "rgb(168, 174, 175) 0.5px solid",
    borderTop: "rgb(168, 174, 175) 0.5px solid",
  };
  const category = {
    margin: categoryStyle.margin,
    padding: categoryStyle.padding,
  };

  return (
    <Fragment>
      <div className="mainheaderBlog">
        <h1>BLOG</h1>
      </div>
      <div class="blog-container">
      <div class="grid-container">
        {/* <div class="content0"></div> */}
        <div class="content1">
          <BlogDetails />
          <BlogDetails />
          <BlogDetails />
          <BlogDetails />
          <div className="menuNumber">
            <div>1</div>
            <div>2</div>
          </div>
        </div>
        <div class="content2">
          <div className="searchBar">
            <div>
              <a>
                <i className="fas fa-search "></i>
                <input type="text" id="searchBarBlog" placeholder="Search.." />
              </a>
            </div>
          </div>
          <div style={{width:"70%"}}>
            <h2 style={{ margin: "30px 80px 30px 80px" }}>Categories</h2>
            <h3 style={categoryStyle}>Fashion</h3>
            <h3 style={category}>Beauty</h3>
            <h3 style={categoryStyle}>Street Style</h3>
            <h3 style={category}>Life Style</h3>
            <h3 style={categoryStyle}>DIY {"&"} Crafts</h3>
          </div>
          <ProductMin />
          <ProductMin />
          <ProductMin />

          <div></div>
          <div></div>
        </div>
      </div>
      </div>
      
    </Fragment>
  );
}
