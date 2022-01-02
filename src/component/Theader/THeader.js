import React from "react";
import { GrMail } from "react-icons/gr";
import { FaPhone } from "react-icons/fa";
import "./theader.css";

function THeader() {
  return (
    <div className="THeader">
      <div className="email">
        <GrMail className="grmail" />
        <div className="email-text">nrohitsingh77@gmail.com</div>
      </div>
      <div className="phone">
        <FaPhone className="faphone" />
        <div className="phone-text">9102528650, 8969680872</div>
      </div>
    </div>
  );
}

export default THeader;
