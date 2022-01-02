import React from "react";

import "./Services.css";

function Services() {
  return (
    <div>
      <p>Lorem ipsum dolor</p>
      <div className="title">
        <h1>Services</h1>
      </div>
      <div className="services">
        <div className="service">
          <div className="pic"></div>
          <div className="title-s">Website Design & Development</div>
          <div className="disc">
            <p>
              progravida nibh vel velit auctor alinean, lorem quis bibendum.
            </p>
          </div>
          <div className="btn-s">Read More</div>
        </div>
        <div className="service">
          <div className="pic"></div>
          <div className="title-s">On Demand Devs</div>
          <div className="disc">
            <p>
              progravida nibh vel velit auctor alinean, lorem quis bibendum.
            </p>
          </div>
          <div className="btn-s">Read More</div>
        </div>
        <div className="service">
          <div className="pic"></div>
          <div className="title-s">Web Hosting</div>
          <div className="disc">
            <p>
              progravida nibh vel velit auctor alinean, lorem quis bibendum.
            </p>
          </div>
          <div className="btn-s">Read More</div>
        </div>
      </div>
    </div>
  );
}

export default Services;
