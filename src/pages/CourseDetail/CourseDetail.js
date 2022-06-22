import React, { useEffect } from "react";
import { Rate } from "antd";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  dangKyKhoaHoc,
  layThongTinKhoaHocAction,
} from "../../redux/actions/QuanLyKhoaHocAction";

const CourseDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layThongTinKhoaHocAction(id));
  }, []);

  const infoCourse = useSelector(
    (state) => state.QuanLyKhoaHocReducer.thongTinKH
  );

  const handleRegisterCourse = (data) => {
    dispatch(dangKyKhoaHoc(data));
  };

  return (
    <section className="detail-Course">
      <div className="wrap-detailCourse">
        <div
          className=" header-detailCourse"
          style={{
            backgroundImage: "url('../../img/15.jpg')",
          }}
        >
          <div
            className="overflow"
            style={{ backgroundImage: "url('../../img/bg-2.png')" }}
          ></div>
          <div className="title detail-course">
            <span>{infoCourse.tenKhoaHoc}</span>
            <h4>
              <NavLink to="/home">Trang chủ</NavLink>{" "}
              <span>/ Chi tiết khóa học</span>
            </h4>
          </div>
        </div>
        <div className="body-detailCourse">
          <div className="row ">
            <div className="col-8 ">
              <div className="Information-Course">
                <div className="tittle-course">
                  {infoCourse.tenKhoaHoc}
                  <span className="price-course">{infoCourse.fee}$</span>
                </div>
                <div className="info-content">
                  <div className="row m-0">
                    <div className="col-3">
                      <div className="item-content teacher-content">
                        <img
                          alt="#"
                          className="teacher-img"
                          src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
                        />
                        <div className="content">
                          <p>
                            Giảng viên{" "}
                            <p>
                              {infoCourse.nguoiTao
                                ? infoCourse.nguoiTao.hoTen
                                : null}{" "}
                            </p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3 borderxx">
                      <div className="item-content ">
                        <div className="content">
                          <p>
                            Danh Mục{" "}
                            <p>
                              {infoCourse.danhMucKhoaHoc
                                ? infoCourse.danhMucKhoaHoc.tenDanhMucKhoaHoc
                                : null}{" "}
                            </p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="item-content ">
                        <div className="content">
                          <p>
                            Đánh giá{" "}
                            <p>
                              <Rate
                                disabled
                                defaultValue={
                                  Math.floor(Math.random() * (5 - 3 + 3)) + 3
                                }
                              />
                            </p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="item-content">
                        <div className="content last-content">
                          <button
                            className="btn--blue "
                            onClick={() => {
                              this.props.addToCart({
                                course: {
                                  ...infoCourse,
                                  fee: infoCourse.fee,
                                },
                              });
                            }}
                          >
                            Thêm vào giỏ hàng{" "}
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-detail-course">
                  <div className="dc-overflow">
                    <img src="../../img/bg-2.png" alt="#" />
                  </div>
                  <img src={infoCourse.hinhAnh} alt="#" />
                </div>
              </div>
              <button
                className="btn--red mt-5"
                onClick={() => {
                  const data = {
                    maKhoaHoc: infoCourse.maKhoaHoc,
                    taiKhoan: "Sangadmin1",
                  };
                  handleRegisterCourse(data);
                }}
              >
                ĐĂNG KÍ KHÓA HỌC
              </button>
            </div>
            <div className="col-4">
              <div className="FearureCourse">
                <p className="featre-tittle">Thông tin khóa học</p>
                <ul>
                  <li>
                    <i class="fa fa-clone"></i>
                    <span>
                      Tên khóa học: <span>{infoCourse.tenKhoaHoc}</span>
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-list-ul"></i>
                    <span>
                      Danh mục:{" "}
                      <span>
                        {infoCourse.danhMucKhoaHoc
                          ? infoCourse.danhMucKhoaHoc.tenDanhMucKhoaHoc
                          : null}{" "}
                      </span>
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                    <span>
                      Mô tả: <span>{infoCourse.moTa}</span>
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <span>
                      Ngày tạo: <span>{infoCourse.ngayTao}</span>
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                    <span>
                      Lượt xem: <span>{infoCourse.luotXem}</span>
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    <span>
                      Học viên: <span>{infoCourse.soLuongHocVien}</span>
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-money" aria-hidden="true"></i>
                    <span>
                      Giá : <span>{infoCourse.fee}$</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;
