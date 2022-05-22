import { http } from '../util/setting';

class QuanLyNguoiDungSerVices {
  dangNhap = (userLogin) => {
    return http.post(`/api/QuanLyNguoiDung/DangNhap`, userLogin)
  }

  dangKy = (userInfo) => {
    return http.post(`/api/QuanLyNguoiDung/DangKy`, userInfo)
  }
}

export const quanLyNguoiDungServices = new QuanLyNguoiDungSerVices();