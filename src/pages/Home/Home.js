import React, { Fragment, useEffect } from "react";
import CourseStep from "../../components/CourseStep";
import OurCategory from "./OurCategory/OurCategory";
import OurCourse from "./OurCourse/OurCourse";
import CommentUser from "../../components/CommentUser";
// import { useSelector, useDispatch } from "react-redux";
// import { laydanhSachKhoaHocAction } from "../../redux/actions/QuanLiKhoaHocAction";

export default function Home() {
  // const {mangKhoaHoc} = useSelector (state => state.QuanLyKhoaHocReducer)
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(laydanhSachKhoaHocAction())
  // },[])
  // 

  return (
    <Fragment>
      <OurCategory />
      <OurCourse />
      <CourseStep />
      <CommentUser />
    </Fragment>
  );
}
