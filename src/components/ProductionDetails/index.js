import React, { Fragment, useState } from "react";
import { DispatchSwitch, switchConsts } from "../Navbar/switchContext";
import "./index.css";
import productdetail01 from "./product-detail-01.jpg";
import productdetail02 from "./product-detail-02.jpg";
import productdetail03 from "./product-detail-03.jpg";
import { useTransition, animated, config, interpolate } from "react-spring";

export default function ProductionDetails(props) {
  const dispatchContext = React.useContext(DispatchSwitch);

  const slide = [
    {
      id: 1,
      url: productdetail01,
    },
    {
      id: 2,
      url: productdetail02,
    },
    {
      id: 3,
      url: productdetail03,
    },
  ];
  const [index, setIndex] = useState(0);


  const transitions = useTransition(slide[index], (item) => item.id, {
    from: { opacity: 0, borderColor : 'rgb(0, 0, 0,0)' },
    enter: { opacity: 1, borderColor : 'rgb(158, 158, 158,0.7)' },
    leave: { opacity: 0, borderColor : 'rgb(0, 0, 0,0)' },
    config: { duration: 400 } 
  });

  return (
    <Fragment>
      {/* <div className="productionDetails"></div> */}
      <div className="mainProduction">
        <div className="imageDetails">
          {transitions.map(({ item, key, props }) => (
            <div className="imagesOptions">
              <div className="SecondaryImages">
   
              <animated.img style = {{
              borderColor : item.id ===1 ? props.borderColor : 'white'
              }}  src={productdetail01} width="70px" onClick = {()=>setIndex(0)}/>
              <animated.img style = {{
              borderColor : item.id ===2 ? props.borderColor : 'white'
              }}
              src={productdetail02} width="70px" onClick = {()=>setIndex(1)}/>
              <animated.img style = {{
              borderColor : item.id ===3 ? props.borderColor : 'white'
              }} src={productdetail03} width="70px" onClick = {()=>setIndex(2)}/>
              </div>

              <div 
              onClick = {()=>setIndex((index + 1) % 3)}
              className="currentImage">
                <animated.img 
                  src={item.url}
                  style={{
                    opacity: props.opacity,
                    width: "auto",
                    height: "auto",
                    width : '100%',
                    minWidth : '317px', 
                    maxHeight: "650px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="orderOptions">
          <div  className="orderOptionsInfo">
            <div>
              <h3>Lightweight Jacket</h3>
              <a
                href="#"
                class="close"
                onClick={(e) => {
                  e.preventDefault();
                  dispatchContext({
                    type: switchConsts.productDetailsToggelSwitch,
                  });
                }}
              />
            </div>
            <span>$58.79</span>
            <p>
              Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
              ligula. Mauris consequat ornare feugiat.
            </p>
          </div>
          <div className="SizeColorInput">
            <h4>Size</h4>
            <select>
              <option>Choose an option</option>
              <option>Size S</option>
              <option>Size M</option>
              <option>Size L</option>
              <option>Size XL</option>
            </select>
          </div>
          <div className="SizeColorInput">
            <h4>Color</h4>
            <select>
              <option>Choose an option</option>
              <option>Red</option>
              <option>Bleu</option>
              <option>Black</option>
              <option>White</option>
            </select>
          </div>
          <div>
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          <button>ADD TO CART</button>
        </div>
      </div>
    </Fragment>
  );
}
