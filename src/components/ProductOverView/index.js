import React, { Fragment, useState } from "react";
import ListQuery from "../../microComponents/listQuery";
import { useSpring, animated } from "react-spring";
import  useMeasure  from "react-use-measure";
import { useMediaQuery } from "react-responsive";
import "./index.css";

const ProductOverView = () => {
  const isMediumScreen = useMediaQuery({ query: "(max-width:900px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width:560px)" });
  let heightSearch
  isSmallScreen ? heightSearch = 1200 : (isMediumScreen ? heightSearch = 670 : heightSearch = 400 )
  const [down, setDown] = useState(false);
  const [searchDown, setSearchDown] = useState(false);
  const props = useSpring({ height: down ? heightSearch : 0, opacity: down ? 1 : 0 });
  const searchProps = useSpring({
    height: searchDown ? 60 : 0,
    opacity: searchDown ? 1 : 0,
    marginTop: searchDown ? 50 : 0,
    marginBottom : searchDown ? 'default' : 0
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

  return (
    <Fragment>
      <section className="ths">
        <header className="prov">
          <p>PRODUCT OVERVIEW</p>
          <div className="searchArea">
            <div className="filter">
              <a href="#">All Products</a>
              <a href="#">Women</a>
              <a href="#">Men</a>
              <a href="#">Bag</a>
              <a href="#">Shoes</a>
              <a href="#">Watchs</a>
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
  
        <animated.input style={{ ...searchProps, paddingLeft: '30px' }} placeholder="Search" />

        <animated.div 
          className="querySection"
          style={{...props, width: "100%" }}
        >
          <ListQuery 
            firstList={[
              <li>Sort By</li>,
              <li>Default</li>,
              <li>Popularity</li>,
              <li>Average rating</li>,
              <li>Newness</li>,
              <li>Price: Low to High</li>,
              <li>Price: High to Low</li>,
            ]}
            thirdList={[
              <li>Color</li>,
              <li>Black</li>,
              <li>Blue</li>,
              <li>Grey</li>,
              <li>Green</li>,
              <li>Red</li>,
              <li>White</li>,
            ]}
            secondeList={[
              <li>Price</li>,
              <li>All</li>,
              <li>$0.00 - $50.00</li>,
              <li>$50.00 - $100.00</li>,
              <li>$100.00 - $150.00</li>,
              <li>$150.00 - $200.00</li>,
              <li>$200.00+</li>,
            ]}
            forthList={[
              <li>Tags</li>,
              <li>
                <a>
                  Fashion
                </a>
              </li>,
              <li>
                <a >
                  Lifestyle
                </a>
              </li>,
              <li>
                <a >
                  Denim
                </a>
              </li>,
              <li>
                <a >
                  Streetstyle
                </a>
              </li>,
            ]}
          />
        </animated.div>
      </section>
    </Fragment>
  );
};

export default ProductOverView;
