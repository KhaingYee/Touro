import React from "react";
import "./CardBox.css";
const CardBox = () => {
  return (
    <div className="container mt-5 CardAll">
      <div className="oneCard">
        <h3 className="numberPlus">24+</h3>
        <p className="numberTxt">Cities</p>
      </div>
      <div className="oneCard">
        <h3 className="numberPlus">700+</h3>
        <p className="numberTxt">Place</p>
      </div>
      <div className="oneCard">
        <h3 className="numberPlus">200+</h3>
        <p className="numberTxt">Hotel</p>
      </div>
      <div className="oneCard">
        <h3 className="numberPlus">2k+</h3>
        <p className="numberTxt">Review</p>
      </div>
    </div>
  );
};

export default CardBox;
