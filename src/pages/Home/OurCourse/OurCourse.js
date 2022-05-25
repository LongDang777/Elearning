import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { layDanhSachKhoaHocAction } from "../../../redux/actions/QuanLyKhoaHocAction";
import Course from "./Course";
import * as $ from "jquery";

const OurCourse = () => {
  const dispatch = useDispatch();
  const courses = useSelector(
    (state) => state.QuanLyKhoaHocReducer.mangKhoaHoc
  );

  useEffect(() => {
    dispatch(layDanhSachKhoaHocAction());
  }, []);
  useEffect(() => {
    $(document).ready(() => {
      loadCourse();
    });
  }, []);

  //

  const loadCourse = () => {
    let lengthItemCourse = $(".item-course").length;
    let x = 3;
    $("#showLess").hide();
    $(".item-course:lt(" + x + ")").show();
    $("#loadMore").click(() => {
      x = x + 3 <= lengthItemCourse ? x + 3 : lengthItemCourse;
      $(".item-course:lt(" + x + ")").slideDown();
      $(".item-course:lt(" + x + ")").show("slow");
      $("#showLess").show();
      x === lengthItemCourse ? $("#loadMore").hide() : $("#loadMore").show();
    });
    $("#showLess").click(() => {
      x = x - 3 <= 0 ? 3 : x - 3;
      $(".item-course")
        .not(":lt(" + 3 + ")")
        .slideUp();
      $(".item-course")
        .not(":lt(" + 3 + ")")
        .hide("slow");
      window.scroll({
        top: $(".list-course").offset().top - 50,
        left: 0,
        behavior: "smooth",
      });
      $("#showLess").hide();
      $("#loadMore").show();
    });
  };

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
          {courses?.splice(20, 6).map((course, index) => (
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
