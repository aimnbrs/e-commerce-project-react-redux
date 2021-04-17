import React, { Fragment, useState, useEffect } from "react";
import BlogDetails from "../../components/BlogDetails";
import blogs from '../../redux/blogs/blogsAction';
import ProductMin from "../../components/BlogMin";
import {  useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

import "./index.css";

export default function Blog() {
  const dispatch = useDispatch();
  useEffect(()=> {
  dispatch(blogs())
  }, [])

  const [pageNumber, setPageNumber] = useState(0);
  const blogsList = useSelector((state) => state.blogs.blogs);

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
            {blogsList.map(
              (element, index) =>
                index > pageNumber * 3 - 1 &&
                index <= pageNumber * 3 + 2 && (
                  <BlogDetails
                    text={element.text.split(" ").splice(0,25).join(" ") + "..."}
                    url={element.url}
                    artical={element.artical}
                    author={element.author}
                    id={element._id}
                  />
                )
            )}

            <div className="menuNumber">
              <div
                onClick={() => {
                  setPageNumber(0);
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                1
              </div>
              <div
                onClick={() => {
                  setPageNumber(1);
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                2
              </div>
            </div>
          </div>
          <div class="content2">
            <div className="searchBar">
              <div>
                <a>
                  <i className="fas fa-search "></i>
                  <input
                    type="text"
                    id="searchBarBlog"
                    placeholder="Search.."
                  />
                </a>
              </div>
            </div>
            <div style={{ width: "70%" }}>
              <h2 style={{ margin: "30px 80px 30px 80px" }}>Categories</h2>
              <h3 style={categoryStyle}>Fashion</h3>
              <h3 style={category}>Beauty</h3>
              <h3 style={categoryStyle}>Street Style</h3>
              <h3 style={category}>Life Style</h3>
              <h3 style={categoryStyle}>DIY {"&"} Crafts</h3>
            </div>
            <h2>Featured Products</h2>
            <ProductMin />
            <ProductMin />
            <ProductMin />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
