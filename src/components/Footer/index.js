import React, { Fragment } from "react";
import "./index.css";
import iconpay1 from "./icons/icon-pay-01.png";
import iconpay2 from "./icons/icon-pay-02.png";
import iconpay3 from "./icons/icon-pay-03.png";
import iconpay4 from "./icons/icon-pay-04.png";
import iconpay5 from "./icons/icon-pay-05.png";
import ListQuery from "../../microComponents/listQuery";

const Footer = (props) => {
  return (
    <Fragment>
      <footer>
        <ListQuery
          firstList={[
            <li>CATEGORIES</li>,
            <li>Women</li>,
            <li>Men</li>,
            <li>Shoes</li>,
            <li>Watches</li>,
          ]}
          secondeList={[
            <li>HELP</li>,
            <li>Track Order</li>,
            <li>Returns</li>,
            <li>Shipping</li>,
            <li>FAQs</li>,
          ]}
          thirdList={[
            <li>GET IN TOUCH</li>,
            <li className="ppr">
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </li>,
            <li>Blue</li>,
          ]}
          forthList={[
            <li>Tags</li>,
            <li>
              {" "}
              <p>
                <input
                  type="email"
                  name=""
                  value=""
                  placeholder="exemple@gmail.com"
                />
              </p>
            </li>,
            <li>
              <p>
                <a href="#" className="butn">
                  Craft
                </a>
              </p>
            </li>,
          ]}
        />
      </footer>
      <div className="miniFooter">
        <div className="cards">
          <img src={iconpay1} alt="" />
          <img src={iconpay2} alt="" />
          <img src={iconpay3} alt="" />
          <img src={iconpay4} alt="" />
          <img src={iconpay5} alt="" />
        </div>
        <div className="para">
          <p>
            Copyright ©2019 All rights reserved | This template is made with{" "}
            <span>aymenBouras</span>{" "}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
