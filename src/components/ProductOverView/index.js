import React, { Fragment, useState, useEffect } from "react";
import ListQuery from "../../microComponents/listQuery";
import { useSpring, animated } from "react-spring";
import useMeasure from "react-use-measure";
import { useMediaQuery } from "react-responsive";
import { productCollection } from "../../redux/products/productAction";
import { useDispatch } from "react-redux";
import "./index.css";

const ProductOverView = () => {
  const isMediumScreen = useMediaQuery({ query: "(max-width:900px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width:560px)" });
  let heightSearch;
  isSmallScreen
    ? (heightSearch = 1200)
    : isMediumScreen
    ? (heightSearch = 670)
    : (heightSearch = 400);
  const [down, setDown] = useState(false);
  const [searchDown, setSearchDown] = useState(false);
  const props = useSpring({
    height: down ? heightSearch : 0,
    opacity: down ? 1 : 0,
  });
  const searchProps = useSpring({
    height: searchDown ? 60 : 0,
    opacity: searchDown ? 1 : 0,
    marginTop: searchDown ? 50 : 0,
    marginBottom: searchDown ? "default" : 0,
  });
  console.log("height", down);
  const toggle = () => {
    setDown(!down);
    setSearchDown(false);
  };
  const toggleSearch = () => {
    setSearchDown(!searchDown);
    setDown(false);
  };

  const [color, setColor] = useState("");
  const [style, setStyle] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState([]);
  const [category, setCategory] = useState("");
  const [model, setModel] = useState("");
  const [sortPrice, setSortPrice] = useState('');


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productCollection(color, style, status, price, category, model, sortPrice));
    console.log("f", color);
  }, [color, style, status, price, category, model, sortPrice]);

  console.log(color);
  return (
    <Fragment>
      <section className="ths">
        <header className="prov">
          <p>PRODUCT OVERVIEW</p>
          <div className="searchArea">
            <div className="filter">
              <a
                onClick={() => {
                  setCategory("");
                }}
              >
                All Products
              </a>
              <a
                onClick={() => {
                  setCategory("Women");
                }}
              >
                Women
              </a>
              <a
                onClick={() => {
                  setCategory("Men");
                }}
              >
                Men
              </a>
              <a
                onClick={() => {
                  setCategory("Bag");
                }}
              >
                Bag
              </a>
              <a
                onClick={() => {
                  setCategory("Shoes");
                }}
              >
                Shoes
              </a>
              <a
                onClick={() => {
                  setCategory("Watches");
                }}
              >
                Watches
              </a>
            </div>
            <div className="filterSearch">
              <a onClick={toggle} className="click">
                {down ? (
                  <i class="fas fa-window-close" />
                ) : (
                  <i className="fas fa-caret-down" />
                )}
                <span>Filter</span>
              </a>
              <a onClick={toggleSearch}>
                <i className="fas fa-search "></i>
                <span>Search</span>
              </a>
            </div>
          </div>
        </header>

        <animated.input
          onChange={(e) => setModel(e.target.value)}
          style={{ ...searchProps, paddingLeft: "30px" }}
          placeholder="Search"
        />

        <animated.div
          className="querySection"
          style={{ ...props, width: "100%" }}
        >
          <ListQuery
            firstList={[
              <li>Sort By</li>,
              <li onClick={() => {setStatus("");setSortPrice("")}}>Default</li>,
              <li onClick={() => setStatus("Popularity")}>Popularity</li>,
              <li onClick={() => setStatus("Average rating")}>
                Average rating
              </li>,
              <li onClick={() => setStatus("Newness")}>Newness</li>,
              <li onClick={() => setSortPrice('dec')}>Price: Low to High</li>,
              <li onClick={() => setSortPrice('asc')}>Price: High to Low</li>,
            ]}
            thirdList={[
              <li>Color</li>,
              <li onClick={() => setColor("")}>All</li>,
              <li onClick={() => setColor("Black")}>Black</li>,
              <li onClick={() => setColor("Blue")}>Blue</li>,
              <li onClick={() => setColor("Grey")}>Grey</li>,
              <li onClick={() => setColor("Green")}>Green</li>,
              <li onClick={() => setColor("White")}>White</li>,
            ]}
            secondeList={[
              <li>Price</li>,
              <li onClick={() => setPrice([])}>All</li>,
              <li onClick={() => setPrice([0,20])}>$0.00 - $20.00</li>,
              <li onClick={() => setPrice([20,40])}>$20.00 - $40.00</li>,
              <li onClick={() => setPrice([40,60])}>$40.00 - $60.00</li>,
              <li onClick={() => setPrice([60,80])}>$60.00 - $80.00</li>,
              <li onClick={() => setPrice([80,200])}>$80.00+</li>,
            ]}
            forthList={[
              <li>
                <a onClick={() => setStyle("")}>All styles</a>
              </li>,
              <li>
                <a onClick={() => setStyle("Fashion")}>Fashion</a>
              </li>,
              <li>
                <a onClick={() => setStyle("Lifestyle")}>Lifestyle</a>
              </li>,
              <li>
                <a onClick={() => setStyle("Denim")}>Denim</a>
              </li>,
              <li>
                <a onClick={() => setStyle("Streetstyle")}>Streetstyle</a>
              </li>,
            ]}
          />
        </animated.div>
      </section>
    </Fragment>
  );
};

export default ProductOverView;
