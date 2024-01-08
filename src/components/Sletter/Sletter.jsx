import React from "react";
import "./Sletter.css";
import { Button } from "bootstrap";

const Sletter = () => {
  return (
    <div className="container mt-5">
      <div className="mainSel py-4">
        <div className="d-flex flex-row align-items-center oneSel">
          <i class="bi bi-amazon selImg"></i>
          <p className="selTxt">aven</p>
        </div>
        <div className="d-flex flex-row align-items-center oneSel">
          <i class="bi bi-hourglass-bottom selImg"></i>
          <p className="selTxt">HEXLAB</p>
        </div>
        <div className="d-flex flex-row align-items-center oneSel">
          <i class="bi bi-trello selImg"></i>
          <p className="selTxt">kanba</p>
        </div>
        <div className="d-flex flex-row align-items-center oneSel">
          <i class="bi bi-browser-edge selImg"></i>
          <p className="selTxt">liva</p>
        </div>
        <div className="d-flex flex-row align-items-center oneSel">
          <i class="bi bi-fan selImg"></i>
          <p className="selTxt">amara</p>
        </div>
      </div>
      <div className="secSel py-5">
        <h3 className="selTitle">Sign up to our newseltter</h3>
        <div className="selSearch my-5">
          <input
            type="text"
            placeholder="Enter your name"
            className="selInput"
          />
          <button type="button" className="btn btn-primary selBtn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sletter;
