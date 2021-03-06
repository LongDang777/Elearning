import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layDanhMucKhoaHocAction } from "../../../redux/actions/QuanLyKhoaHocAction";
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
        <div className="row d-flex justify-content-around">
          {danhMucKhoaHoc.map((item, index) => (
            <ItemCategory
              className="col-xl-2 col-lg-4 p-4"
              key={index}
              img={index + 1}
              category={item}
            />
          ))}
        </div>
        <img src="../src/assets/image/category/1.jpg" width={100} alt="" />
      </div>
    </div>
  );
};

export default OurCategory;
