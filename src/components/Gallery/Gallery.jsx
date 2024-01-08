import React from "react";
import "./Gallery.css";
import galleryThree from "../../assets/images/galleryThree.jpg";
import galleryOne from "../../assets/images/galleryOne.jpg";
import galleryTwo from "../../assets/images/galleryTwo.jpg";
import bone from "../../assets/images/bone.jpg";
import btwo from "../../assets/images/btwo.jpg";
import bthree from "../../assets/images/bthree.jpg";

const Gallery = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex align-items-end justify-content-between my-3">
        <div className="d-flex align-items-end">
          <p className="popularTitle position-relative">Our Gallery</p>
          <span className="d-none d-block d-sm-block monment">
            Happy Monments
          </span>
        </div>
        <div>
          <p className="viewAllTxt">View all</p>
        </div>
      </div>
      <div className="imageGroup">
        <div className="imgFir">
          <div className="imgTop">
            <img src={galleryThree} className="doTop rounded w-100" />
          </div>
          <div className="imgBot">
            <img src={bone} className="doBot rounded w-100" />
          </div>
        </div>
        <div className="imgFir">
          <div className="imgBot">
            <img src={bone} className="doBot rounded w-100" />
          </div>
          <div className="imgTop">
            <img src={galleryTwo} className="doTop rounded w-100" />
          </div>
        </div>
        <div className="imgFir">
          <div className="imgTop">
            <img src={galleryOne} className="doTop rounded w-100" />
          </div>
          <div className="imgBot">
            <img src={btwo} className="doBot rounded w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
