import React from "react";
import "./CTA.css";

function CTA() {
  return (
    <div className="cta-container">
      <div className="cta-items">
        <div className="cta-content">
          <div className="cta-title">Let's Discuss</div>
          <div className="cta-disc">
            progravida nibh vel velit auctor alinean, lorem quis bibendum
            auctor.
          </div>
        </div>
        <div className="cta-input-area">
          <input type="text" className="cta-input" />
          <div className="btn btn-c">Sign up</div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
