import React, { useState } from "react";
import "./Popular.css";
import bone from "../../assets/images/bone.jpg";
import btwo from "../../assets/images/btwo.jpg";
import bthree from "../../assets/images/bthree.jpg";
const Popular = () => {
  const [activeItem, setActiveItem] = useState("beach");

  const handleClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <div className="container mt-5">
      <div className="row align-items-end">
        <div className="col-lg-6 col-md-4 col-sm-12">
          <p className="popularTitle">Popular Place</p>
        </div>
        <div className="col-lg-6 col-md-8 col-sm-12 d-flex justify-content-md-end justify-content-sm-center justify-content-center">
          <div className="d-flex gap-3 gap-md-3 gap-lg-4 flex-wrap">
            <div
              className="position-relative"
              onClick={() => handleClick("beach")}
            >
              <p className="categoryTxt">Beach</p>
              <div className={activeItem === "beach" ? "activeNav" : ""}></div>
            </div>
            <div
              className="position-relative"
              onClick={() => handleClick("mountain")}
            >
              <p className="categoryTxt">Mountain</p>
              <div
                className={activeItem === "mountain" ? "activeNav" : ""}
              ></div>
            </div>
            <div
              className="position-relative"
              onClick={() => handleClick("waterfall")}
            >
              <p className="categoryTxt">Waterfall</p>
              <div
                className={activeItem === "waterfall" ? "activeNav" : ""}
              ></div>
            </div>
            <div
              className="position-relative"
              onClick={() => handleClick("icebergs")}
            >
              <p className="categoryTxt">Icebergs</p>
              <div
                className={activeItem === "icebergs" ? "activeNav" : ""}
              ></div>
            </div>
            <div>
              <p className="viewAllTxt">View all</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
          <div className="card p-2">
            <div className="popularImg">
              <img src={bthree} alt="" className="w-100 h-100" />
            </div>
            <div className="d-flex justify-content-between align-items-center pt-2s">
              <p className="popuName">Siasconset Beach</p>
              <div className="d-flex flex-row align-items-center">
                <i class="bi bi-star-fill iconStar"></i>&nbsp;
                <p className="ratingTxt">4.9</p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <i class="bi bi-geo-alt-fill locIcon"></i>&nbsp;
              <p className="placeTxt">Island</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
          <div className="card p-2">
            <div className="popularImg">
              <img src={btwo} alt="" className="w-100 h-100" />
            </div>
            <div className="d-flex justify-content-between align-items-center pt-2s">
              <p className="popuName">Horseshoe Beach</p>
              <div className="d-flex flex-row align-items-center">
                <i class="bi bi-star-fill iconStar"></i>&nbsp;
                <p className="ratingTxt">4.9</p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <i class="bi bi-geo-alt-fill locIcon"></i>&nbsp;
              <p className="placeTxt">Chinese</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
          <div className="card p-2">
            <div className="popularImg">
              <img src={bone} alt="" className="w-100 h-100" />
            </div>
            <div className="d-flex justify-content-between align-items-center pt-2s">
              <p className="popuName">Virgin Beach</p>
              <div className="d-flex flex-row align-items-center">
                <i class="bi bi-star-fill iconStar"></i>&nbsp;
                <p className="ratingTxt">4.9</p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <i class="bi bi-geo-alt-fill locIcon"></i>&nbsp;
              <p className="placeTxt">Japan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
