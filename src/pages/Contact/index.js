import React, { Fragment } from "react";
import "./contact.css";

export default function Contact() {
  return (
    <Fragment>
      <div className="mainheaderContact">
        <h1>CONTACT</h1>
      </div>
      <div className="mainContact">
        <div className="sendMessageContainer">
         <div className="sendMessage">
         <h2>Send As A Message</h2>
          <form
            className="contact-form"
            // onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Email address"
              />
            </div>
            <div className="form-group">
              <textarea className="form-control" rows="10" placeholder="Message"></textarea>
            </div>
            <button type="submit">
              Submit
            </button>
          </form>
         </div>
        </div>
        <div className="informationsContainer">
            <div className="informationsContact">
                <div>
                    <span><i class="fas fa-map-marker-alt"></i></span>
                    <div>
                        <h3>Address</h3>
                        <p>Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
                    </div>
                </div>
                <div>
                    <span><i class="fas fa-phone"></i></span>
                    <div>
                        <h3>Lets Talk</h3>
                        <p>+1 800 1236879</p>
                    </div>
                </div>
                <div>
                    <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                    <div>
                        <h3>Sale Support</h3>
                        <p>contact@example.com</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Fragment>
  );
}
