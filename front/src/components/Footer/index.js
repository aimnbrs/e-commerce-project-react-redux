import React, { Fragment } from 'react';
import './index.css'
import iconpay1 from "./icons/icon-pay-01.png";
import iconpay2 from "./icons/icon-pay-02.png";
import iconpay3 from "./icons/icon-pay-03.png";
import iconpay4 from "./icons/icon-pay-04.png";
import iconpay5 from "./icons/icon-pay-05.png"; 



const Footer = props => {
    return (
        <Fragment>
            <footer>
                    <div className="collapse footer">
                        <ul className="ftrfrst">
                            <li>CATEGORIES</li>
                            <li>Women</li>
                            <li>Men</li>
                            <li>Shoes</li>
                            <li>Watches</li>
                        </ul>
                        <ul className="ftrscnd">
                            <li>HELP</li>
                            <li>Track Order</li>
                            <li>Returns</li>
                            <li>Shipping</li>
                            <li>FAQs</li>
                        </ul>
                        <ul className="ftrthird">
                            <li>GET IN TOUCH</li>
                            <li className="ppr"><p></p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</li>
                            <li>Blue</li>
                        </ul>
                        <ul className="ftrforth">
                            <li>Tags</li>
                            <li><input type="email" name="" value="" placeholder="exemple@gmail.com" /></li>
                            <li><a href="#" className="butn">Craft</a></li>
                        </ul>
                    </div>

                </footer>
                <div className="ltlftr">
                    <div className="cards">
                        <img src={iconpay1} alt="" />
                        <img src={iconpay2} alt="" />
                        <img src={iconpay3} alt="" />
                        <img src={iconpay4} alt="" />
                        <img src={iconpay5} alt="" />
                    </div>
                    <div className="para">
                        <p>Copyright ©2019 All rights reserved | This template is made with <span>aymenBouras</span> </p>
                    </div>
                </div>
        </Fragment>
    );
}


export default Footer;