import React from "react";
import Loader from "../Loader";
import "./index.css";

const WhoImItemList = ({ loading }) => {
  return loading ? (
    <Loader numberItemsRender={5} />
  ) : (
    new Array(4).fill(null).map((__, index) => (
      <div className="item-list-container" key={`key-${index}`}>
        <div className="pic-container">
          <img
            className="pic"
            src="https://pbs.twimg.com/profile_images/1309502690574110727/ti9dIdKv_400x400.jpg"
            alt="goku_dios_saiyan"
          />
        </div>
        <div className="text-container">
          <div className="title">Guillermo Calderon</div>
          <div className="sub-title">FullStack del universo</div>
        </div>
      </div>
    ))
  );
};

export default WhoImItemList;
