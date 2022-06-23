import React from "react";
import { NavLink } from "react-router-dom";

const Course = ({ course }) => {
  return (
    <div className="khoa-hoc">
      <div className="wallpaper">
        <img src={course.hinhAnh} />
        <div className="overflow">
          <div className="ct-wallpaper">
            <h3>{course.tenKhoaHoc}</h3>
            <p>{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="relative">
          <div className="status-course">
            <span>New</span>
            {/* <span>HOT</span> */}
          </div>
          <div className="mct-original">
            <div className="d-flex">
              <img src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" />
              <div className="content">
                <label>Giảng viên</label>
                <p>{course.nguoiTao.hoTen}</p>
              </div>
            </div>
            <div className="d-flex">
              <i className="fa fa-mortar-board"></i>
              <div className="content">
                <label>Học viên</label>
                <p>{course.soLuongHocVien}</p>
              </div>
            </div>
            <div className="d-flex fee">${course.fee}</div>
          </div>
          <div className="mct-hover">
            <p className="text-sm">Ngày khởi tạo: {course.ngayTao}</p>
            <h3 className="text-lg">{course.tenKhoaHoc}</h3>
            <p className="text-sm">{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
            <div className="d-flex justify-content-between pr-3">
              <div className="d-flex align-items-center">
                <img src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" />
                <div className="content">
                  <label>Giảng viên</label>
                  <p>{course.nguoiTao.hoTen}</p>
                </div>
              </div>
              <div className="d-flex align-items-center fee">${course.fee}</div>
            </div>
            <span>
              <i className="fa fa-eye"></i> {course.luotXem} |{" "}
              <i className="fa fa-mortar-board"></i>
              {course.soLuongHocVien} | <i className="fa fa-heart"></i> 99
            </span>
            <p className="description">{course.moTa}</p>
            <div className="btn-group">
              <NavLink
                className="btn--white btnn"
                to={`/coursedetail/${course.maKhoaHoc}`}
              >
                CHI TIẾT
              </NavLink>
              {/* {this.handleAddToCart()} */}
              <div className="like">
                <div className="HeartAnimation"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
