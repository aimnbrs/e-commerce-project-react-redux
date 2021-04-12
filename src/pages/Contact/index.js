import React, { Fragment } from "react";
import Button from "../../microComponents/button";
import "./contact.css";

export default function Contact() {
  return (
    <Fragment>
      <div className="mainheaderContact">
        <h1>CONTACT</h1>
      </div>
      <div className="contactContainer">
        <div className="mainContact">
          <div className="sendMessageContainer">
            <div className="sendMessage">
              <h2>Send As A Message</h2>
              <form className="contact-form" method="POST">
                <input
                  type="email"
                  aria-describedby="emailHelp"
                  placeholder="Email address"
                />
                <textarea rows="10" placeholder="Message"></textarea>
                <Button  type="submit">Submit</Button>
              </form>
            </div>
          </div>
          <div className="informationsContainer">
            <div className="informationsContact">
              <div>
                <span>
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                <div>
                  <h3>Address</h3>
                  <p>
                    Coza Store Center 8th floor, 379 Hudson St, New York, NY
                    10018 US
                  </p>
                </div>
              </div>
              <div>
                <span>
                  <i class="fas fa-phone"></i>
                </span>
                <div>
                  <h3>Lets Talk</h3>
                  <p>+1 800 1236879</p>
                </div>
              </div>
              <div>
                <span>
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
                <div>
                  <h3>Sale Support</h3>
                  <p>contact@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
