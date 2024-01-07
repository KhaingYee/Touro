import React from "react";
import "./Search.css";
import { InputLabel, FormControl, NativeSelect } from "@mui/material";
import rightImg from "../../assets/images/traveltwo.png";

const SearchDiv = () => {
  return (
    <div className="container">
      <div className="mainDiv row mt-5">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <div className="leftTop d-sm-block d-sm-none d-md-block d-lg-block d-block d-none position-relative">
            <h1 className="textName">Explore</h1>
            <h1 className="textName">Beautiful</h1>
            <h1 className="textName">World!</h1>
          </div>

          <div className="searchDiv row bg-body-tertiary">
            <div className="col-3">
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Location in
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: "location",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Yangon</option>
                  <option value={20}>Mandaly</option>
                  <option value={30}>Pathein</option>
                </NativeSelect>
              </FormControl>
            </div>
            <div className="col-3">
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Date
                </InputLabel>
                <NativeSelect
                  defaultValue={20}
                  inputProps={{
                    name: "date",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Wed 7 Nov</option>
                  <option value={20}>Tue 9 Dec</option>
                  <option value={30}>fir 11 Nov</option>
                </NativeSelect>
              </FormControl>
            </div>
            <div className="col-3">
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Price Rate
                </InputLabel>
                <NativeSelect
                  defaultValue={10}
                  inputProps={{
                    name: "price",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>$100-$400</option>
                  <option value={20}>$400-$700</option>
                  <option value={30}>$700-$900</option>
                </NativeSelect>
              </FormControl>
            </div>

            <button type="button" className="btn btn-primary col-3">
              Search
            </button>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12">
          <img src={rightImg} className="w-100 h-100" />
        </div>
      </div>
    </div>
  );
};

export default SearchDiv;
