import { http } from '../util/setting';

class QuanLyNguoiDungService {
  layDanhSachNguoiDung = (tuKhoa) => {
    if (tuKhoa) {
      return http.get(
        `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?tuKhoa=${tuKhoa}&MaNhom=GP01`,
      );
    }
    return http.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`);
  };
  layThongTinTaiKhoan = () => {
    return http.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };
  capNhatThongTinTaiKhoan = (newUserInfo) => {
    return http.put(
      `/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      newUserInfo,
    );
  };
  dangNhap = (userLogin) => {
    return http.post(`/api/QuanLyNguoiDung/DangNhap`, userLogin);
  };
  dangKy = (userInfo) => {
    return http.post(`/api/QuanLyNguoiDung/DangKy`, userInfo);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
