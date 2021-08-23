import React from "react";

export const MarksLayout = () => {
  return (
    <div className="rewards">
      <div className="questions-status">
        <div className="question-status">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="created-by">
          &copy; Created by Avinash jha
          <br />
          {new Date().getFullYear()}{" "}
        </div>
      </div>
      <div class="marks">
        <div className="current-marks">
          <h3>0/10</h3>
        </div>
        <div className="pass-marks">
          <h3>5/10</h3>
        </div>
      </div>
    </div>
  );
};
