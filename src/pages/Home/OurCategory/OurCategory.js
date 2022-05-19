import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layDanhMucKhoaHocAction } from "../../../redux/actions/DanhMucKhoaHoc";
import ItemCategory from "./ItemCategory";
const OurCategory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhMucKhoaHocAction());
  }, []);
  const danhMucKhoaHoc = useSelector(
    (state) => state.QuanLyDMKhoaHocReducer.mangDMKhoaHoc
  );
  return (
    <div className="category">
      <h1 className="title">Our Category</h1>
      <div className="container">
        <div className="d-flex justify-content-around">
          {danhMucKhoaHoc.map((item, index) => (
            <ItemCategory key={index} img={index + 1} category={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCategory;
