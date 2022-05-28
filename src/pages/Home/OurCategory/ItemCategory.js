import React from "react";
import { NavLink } from "react-router-dom";

export default function ItemCategory(props) {
  return (
    <>
      <NavLink className="item-category" to={`/allcourse`}>
        <div className="overflow"></div>
        <img src={`./img/${props.img}.jpg`} alt="img-category" />
        <div className="content">
          <div className="text-center item-category__heading">
            <h6>{props.category.tenDanhMuc}</h6>
          </div>
        </div>
      </NavLink>
    </>
  );
}
