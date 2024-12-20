import React from "react";
import "./Address.css";
import iconPhone from "./../../assets/images/icon-phone.svg";
import iconEmail from "./../../assets/images/icon-email.svg";
import iconFacebook from "./../../assets/images/icon-facebook.svg";
import iconSkype from "./../../assets/images/icon-skype.svg";
import iconTwitter from "./../../assets/images/icon-twitter.svg";

function Address() {
  return (
    <div className="address">
      <a className="address-item" href="tel:500342242">
        <img src={iconPhone} alt="" />
        500 342 242
      </a>
      <a className="address-item" href="mailto:office@kamsolutions.pl">
        <img src={iconEmail} alt="" />
        office@kamsolutions.pl
      </a>
      <a className="address-item" href="https://twitter.com/wordpress">
        <img src={iconTwitter} alt="Twitter" />
        <div className="address-item__right">
          <p>Twitter</p>
          <p className="address-item__right-link">
            https://twitter.com/wordpress
          </p>
        </div>
      </a>
      <a className="address-item" href="https://www.facebook.com/facebook">
        <img src={iconFacebook} alt="facebook" />
        <div className="address-item__right">
          <p>Facebook</p>
          <p className="address-item__right-link">
            https://www.facebook.com/facebook
          </p>
        </div>
      </a>
      <a className="address-item" href="skype:kamsolutions.pl?call">
        <img src={iconSkype} alt="Skype" />
        <div className="address-item__right">
          <p>Skype</p>
          <p className="address-item__right-link">kamsolutions.pl</p>
        </div>
      </a>
    </div>
  );
}

export default Address;
