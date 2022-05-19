import React, { Fragment, useEffect } from "react";
import OurCategory from "./OurCategory/OurCategory";

// import { useSelector, useDispatch } from "react-redux";
// import { laydanhSachKhoaHocAction } from "../../redux/actions/QuanLiKhoaHocAction";

export default function Home() {
  // const {mangKhoaHoc} = useSelector (state => state.QuanLyKhoaHocReducer)
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(laydanhSachKhoaHocAction())
  // },[])

  return (
    <Fragment>
      <OurCategory />
    </Fragment>
  );
}
