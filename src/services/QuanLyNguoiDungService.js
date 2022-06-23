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
    return http.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
  }
  layThongTinNguoiDung = (taiKhoan) => {
    return http.post(`/api/QuanLyNguoiDung/ThongTinNguoiDung?taiKhoan=${taiKhoan}`)
  }
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
    return http.post(`/api/QuanLyNguoiDung/DangKy`, userInfo)
  }
  xoaND = (taiKhoan) => {
    return http.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
  };
  themNguoiDung = (formData) => {
    return http.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, formData)
  }
  capNhatThongTinNguoiDung = (formData) => {
    return http.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, formData)
  }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
