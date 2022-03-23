import React from 'react'
import footerlogo from "../images/ziroh-logo.png";

function Footer() {
  return (
    <div className="footer-copyright text-center py-4 fixed-bottom">
      Powered by{" "}
      <a href="https://ziroh.com/">
        {" "}
        <img src={footerlogo} alt="" />
      </a>
    </div>
  );
}

export default Footer;