import React from "react";
import "./Show.css";
import leftImg from "../../assets/images/travelThree.png";

const Show = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img src={leftImg} className="w-100 h-100" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h3 className="text divide">Explore all corners of</h3>
          <h3 className="text">The world with us</h3>
          <p className="destail mt-3">
            We offer a wide range of travel services to provide our clients with
            an unforgettable journey.And many of our people need it on these
            accounts.
          </p>
          <div className="row mt-3">
            <div className="col d-flex flex-row align-items-center">
              <i class="bi bi-airplane-engines iconImg"></i>
              <p className="iconTxt">Flight</p>
            </div>
            <div className="col d-flex flex-row align-items-center">
              <i class="bi bi-buildings iconImg"></i>
              <p className="iconTxt">Hotel</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col d-flex flex-row align-items-center">
              <i class="bi bi-wifi iconImg"></i>
              <p className="iconTxt">Wifi</p>
            </div>
            <div className="col d-flex flex-row align-items-center">
              <i class="bi bi-flower2 iconImg"></i>
              <p className="iconTxt">Food</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
