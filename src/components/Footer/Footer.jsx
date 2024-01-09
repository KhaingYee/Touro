import React from "react";
import "./Footer.css";
import logoImg from "../../assets/images/travelLogo.jpg";

const Footer = () => {
  return (
    <div className="container mt-3 mb-5">
      <div className="row row-gap-3">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="d-flex flex-row">
            <img src={logoImg} className="footerLogo" />
            <h6 className="footerTitle">Touro</h6>
          </div>
          <div className="footerUl">
            <p className="footerDes">
              And many of our people.And many of our people.And many of our
              people.
            </p>
            <div className="d-flex flex-row align-items-center justify-content-between endpd">
              <i class="bi bi-facebook iconGop"></i>
              <i class="bi bi-twitter iconGop"></i>
              <i class="bi bi-instagram iconGop"></i>
              <i class="bi bi-linkedin iconGop"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h6 className="footerTitle">Quick Link</h6>
          <ul className="footerUl">
            <li className="footerLi">Home</li>
            <li className="footerLi">Category</li>
            <li className="footerLi">Blog</li>
            <li className="footerLi">About Us</li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h6 className="footerTitle">Quick Link</h6>
          <ul className="footerUl">
            <li className="footerLi">FAQ's</li>
            <li className="footerLi">Privacy Policy</li>
            <li className="footerLi">Term & Condations</li>
            <li className="footerLi">Support</li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h6 className="footerTitle">Contact Us</h6>
          <ul className="footerUl">
            <li className="footerLi">
              <i class="bi bi-geo-alt iconCon"></i>
              <span className="fotxt">
                No.34, 9Ward, Hlaing Township, Yangon
              </span>
            </li>
            <li className="footerLi">
              <i class="bi bi-telephone iconCon"></i>
              <span className="fotxt">+959 955 720 887</span>
            </li>
            <li className="footerLi">
              <i class="bi bi-envelope iconCon"></i>
              <span className="fotxt">touro@agency.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyRight mt-5">
        <p className="copyRightDesc my-5">
          Copyright @ <span className="copyRightCompany">touro@agency</span>.com
          by all rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
