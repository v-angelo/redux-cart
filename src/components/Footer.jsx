import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTruck,
  faArrowRight,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-4 mb-4">
            <h4>
              <FontAwesomeIcon icon={faTruck} className="me-2" />
              E-Cart
            </h4>
            <p>
              Designed and built with all the love in the world by the Luminar
              team with the help of our contributors.
            </p>
            <p>Code licensed Luminar, docs CC BY 3.0.</p>
            <p>Currently v5.3.2.</p>
          </div>

          {/* Links */}
          <div className="col-md-2 mb-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Cart
                </a>
              </li>
            </ul>
          </div>

          {/* Guides */}
          <div className="col-md-3 mb-4">
            <h5>Guides</h5>
            <ul className="list-unstyled">
              <li>React</li>
              <li>React Bootstrap</li>
              <li>React Router</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>

            <div className="d-flex mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email Here"
              />
              <button className="btn btn-light ms-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            <div className="d-flex gap-3 fs-5">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faWhatsapp} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faEnvelope} />
              <FontAwesomeIcon icon={faPhone} />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center pt-3 border-top mt-3">
          <p className="mb-0">
            Copyright © March 2026 Batch, E-Cart. Built with React Redux.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
