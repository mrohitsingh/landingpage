import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="top-foo">
        <div className="foo-brand">
          <div className="foo-logo">Footer Logo</div>
          <div className="foo-desc">
            progravida nibh vel velit auctor alinean, lorem quis bibendum aby
            the readable.progravida nibh vel velit auctor alinean, lorem quis
            bibendum aby the readable.
          </div>
        </div>
        <div className="foo-link">
          <div className="foo-link-title">Links</div>
          <div className="foo-menu">
            <div className="foo-menu-items">Our Clients</div>
            <div className="foo-menu-items">Privacy Policy</div>
            <div className="foo-menu-items">Our Benefits</div>
          </div>
        </div>
        <div className="foo-link">
          <div className="foo-link-title">Information</div>
          <div className="foo-menu">
            <div className="foo-menu-items">Our Clients</div>
            <div className="foo-menu-items">Privacy Policy</div>
            <div className="foo-menu-items">Our Benefits</div>
          </div>
        </div>
        <div className="foo-link">
          <div className="foo-link-title">Contact Us</div>
          <div className="foo-menu">
            <div className="foo-menu-items-c">
              +91 9711999770, +1 833-880-3355
            </div>
            <div className="foo-menu-items-c">info@bytequests.com</div>
            <div className="foo-menu-items-c">
              84, Block A, Sector 4, Nozida, Up, 201301
            </div>
          </div>
        </div>
      </div>
      <div className="btm-foo">
        Copyright 2021 ByteQuest Software Private Limited. All Right Reserved.
      </div>
    </div>
  );
}

export default Footer;
