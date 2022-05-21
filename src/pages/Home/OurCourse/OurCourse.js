import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { laydanhSachKhoaHocAction } from "../../../redux/actions/QuanLiKhoaHocAction";
import Course from "./Course";

const OurCourse = () => {
  const dispatch = useDispatch();
  const courses = useSelector(
    (state) => state.QuanLyKhoaHocReducer.mangKhoaHoc
  );

  useEffect(() => {
    dispatch(laydanhSachKhoaHocAction());
  }, []);

  return (
    <section className="list-course mb-lg-5">
      <h3 className="title">Our Top Courses</h3>
      <p className="subtitle">
        Our instructors around the world teach millions of students on
        E-Learing.
        <br /> We give you the skills and courses to teach what you love
      </p>
      <div className="lc-main-content">
        <div className="lc-content">
          {courses?.splice(20, 3).map((course, index) => (
            <div className="item-course" key={index}>
              <Course course={course} />
            </div>
          ))}
        </div>
        <div className="lc-btn-group">
          <button className="btn--blue btnn" id="loadMore">
            SHOWN MORE <i className="fa fa-angle-double-down"></i>
          </button>
          <button className="btn--blue btnn" id="showLess">
            SHOWN LESS <i className="fa fa-angle-double-up"></i>
          </button>
          <NavLink className="btn--purple btnn" to="/home/courses/all">
            SHOWN ALL<i className="fa fa-angle-double-right"></i>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default OurCourse;
