import { http } from '../util/setting';


class QuanLyNguoiDungService {
  layDanhSachNguoiDung = (tuKhoa) => {
    if (tuKhoa) {
      return http.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?tuKhoa=${tuKhoa}&MaNhom=GP01`)
    }
    return http.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`)
  };
  layThongTinTaiKhoan = () => {
    return http.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
  }

}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
