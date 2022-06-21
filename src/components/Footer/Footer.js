import { FacebookOutlined, YoutubeOutlined } from "@ant-design/icons";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer text-center">
      <div className="overflow" />
      <div className="container">
        <div className="main-content">
          <div className="logo-title">
            <h1>Elearning</h1>
          </div>
          <div className="row">
            <div className="col-4 chinh-sach">
              <h5>Chính sách &amp; quy định</h5>
              <ol className="list-unstyled">
                <li>
                  <a href="#">Thỏa thuận sử dụng</a>
                </li>
                <li>
                  <a href="#">Quy chế hoạt động</a>
                </li>
                <li>
                  <a href="#">Chính sách bảo mật</a>
                </li>
                <li>
                  <a href="#">Quyền lợi thành viên</a>
                </li>
              </ol>
            </div>
            <div className="lien-ket col-4">
              <h5>Liên kết</h5>
              <div className="d-flex justify-content-center">
                <a className="facebook" href="https://fullstack.edu.vn/">
                  <FacebookOutlined />
                </a>
                <a
                  className="youtube"
                  href="https://www.youtube.com/c/F8VNOfficial"
                >
                  <YoutubeOutlined />
                </a>
              </div>
            </div>
            <div className="col-4 lien-he text-left">
              <h5 className="d-flex justify-content-center">Liên hệ</h5>
              <ol className="list-unstyled">
                <li>
                  <i className="fa fa-envelope-o" aria-hidden="true">
                    <span>trandung@gmail.com</span>
                  </i>
                </li>
                <li>
                  <i className="fa fa-envelope-o" aria-hidden="true">
                    <span>longdang@gmail.com</span>
                  </i>
                </li>
                <li>
                  <i className="fa fa-envelope-o" aria-hidden="true">
                    <span>quocky@gmail.com</span>
                  </i>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="line-mid" />
        <div className="second-content d-flex justify-content-between">
          <a className="d-inline-block" width={150}>
            <img
              src="https://hocmai.vn/theme/new2/images/congthuong.png"
              className="img-fluid"
            />
          </a>
          <div className="text-right">
            <p>SẢN PHẨM ĐƯỢC TẠO BỞI TRẦN DŨNG, QUỐC KỲ &amp; LONG ĐẶNG</p>
            <p>
              ĐỊA CHỈ: 100 PHẠM NHƯ XƯƠNG - HÒA KHÁNH NAM, LIÊN CHIỂU ,TP.ĐN
            </p>
            <p>2022 © PDElearning. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
