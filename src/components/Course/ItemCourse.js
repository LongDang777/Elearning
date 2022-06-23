import React, { useEffect } from "react";
import { UncontrolledPopover, PopoverBody } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { themGioHangAction } from "../../redux/actions/QuanLyKhoaHocAction";
import photo from '../../assets/img/user-image.png'

export default function ItemCourse(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { course, courseOfUser } = props;
  const dispatch = useDispatch();
  const { gioHang } = useSelector((state) => state.QuanLyKhoaHocReducer);

  const goTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const addToCart = () => {
    localStorage.getItem("LOGIN_USER")
      ? dispatch(themGioHangAction(course))
      : Swal.fire({
          position: "center",
          icon: "error",
          html: `<h3 style="color:#f27474"><b>ERROR!</b></h3><b>VUI LÒNG ĐĂNG NHẬP</b>`,
          showConfirmButton: false,
          timer: 1500,
        });
  };

  const renderAddToCart = () => {
    return gioHang.findIndex((item) => {
      return item.maKhoaHoc === course.maKhoaHoc;
    }) === -1 ? (
      <button className="btn--blue btnn" onClick={addToCart}>
        THÊM GIỎ HÀNG
      </button>
    ) : (
      <NavLink className="btn--purple btnn" to="/">
        TỚI GIỎ HÀNG
      </NavLink>
    );
  };

  const handleAddToCart = () => {
    return courseOfUser ? (
      courseOfUser.findIndex((item) => {
        return item.maKhoaHoc === course.maKhoaHoc;
      }) === -1 ? (
        renderAddToCart()
      ) : (
        <NavLink className="btn--green btnn" to="/home/profile" onClick={goTop}>
          TỚI HỒ SƠ
        </NavLink>
      )
    ) : (
      renderAddToCart()
    );
  };

  const renderPopover = () => {
    return (
      <UncontrolledPopover
        trigger="hover"
        placement="right"
        target={"Popover-" + props.id}
      >
        <PopoverBody>
          <div className="course-info">
            <div className="course-infomation">
              <p className="text-sm">Ngày khởi tạo: {course.ngayTao}</p>
              <h3 className="course-name">{course.tenKhoaHoc}</h3>
              <p className="text-sm">
                {course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
              </p>
              <span className="more-infomation">
                <i className="fa fa-eye"></i> {course.luotXem} |{" "}
                <i className="fa fa-mortar-board"></i>
                {course.soLuongHocVien} | <i className="fa fa-heart"></i> 99
              </span>
              <p className="course-description">{course.moTa}</p>
              <div className="detail-course">
                <NavLink
                  className="btn--black"
                  to={`/coursedetail/${course.maKhoaHoc}`}
                >
                  Chi Tiết
                </NavLink>
                {handleAddToCart()}
              </div>
            </div>
          </div>
        </PopoverBody>
      </UncontrolledPopover>
    );
  };

  return (
    <div id={"Popover-" + props.id} className="ItemCourses">
      <div className="allCourse-item ">
        <div className="image">
          <div className="wrap-img">
            <div
              className="wrap-image-IC"
              style={{ backgroundImage: `url(${course.hinhAnh})` }}
            ></div>
          </div>
          <div className="teacher-img">
            <div className="row m-0 align-center">
              <div className="col-3 left-side ">
                <img src={photo} />
                <div className="teacher-name">
                  <span> {course ? course.nguoiTao.hoTen : null} </span>
                </div>
              </div>
              <div className="col-9 right-side">
                <div className="course-name">
                  <span>{course.tenKhoaHoc}</span>
                </div>
                <div className="more-infomation">
                  <div className="more-info-item">
                    <span>
                      <i className="fa fa-graduation-cap"> </i>{" "}
                      <span>Học viên</span>
                      <p>{course.soLuongHocVien}</p>
                    </span>
                  </div>
                  <div className="more-info-item">
                    <span>
                      <i className="fa fa-eye"> </i>
                      <span>Lượt xem</span>
                      <p>{course.luotXem}</p>
                    </span>
                  </div>
                  <div className="more-info-item">
                    <span>
                      {" "}
                      <span className="dollar">
                        <label>Khoá Học</label>
                        <p style={{ fontSize: "16px" }}>
                          {course.danhMucKhoaHoc.tenDanhMucKhoaHoc}{" "}
                        </p>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {renderPopover()}
      </div>
    </div>
  );
}
