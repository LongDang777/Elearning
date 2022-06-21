import { http } from '../util/setting';



class QuanLyKhoaHocServices {
  // Trang Home
  laydanhSachKhoaHoc = (tenKhoaHoc) => {
    if (tenKhoaHoc) {
      return http.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=GP01`)
    }
    return http.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`)
  };
  layDanhMucKhoaHoc = () => {
    return http.get(`/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`)
  }
  layKhoaHocTheoDanhMuc = (maDanhMuc) => {
    if (maDanhMuc) {
      return http.get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP01`)
    }
    return http.get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?MaNhom=GP01`)
  }
  layThongTinKhoaHoc = (maKhoaHoc) => {
    return http.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
  }
  dangKyKhoaHoc = (data) =>{
    return http.post(`/api/QuanLyKhoaHoc/DangKyKhoaHoc`, data)
  }


  //Phần Admin
  layThongTinHocVienKhoaHoc = (maKhoaHoc) => {
    return http.get(`/api/QuanLyKhoaHoc/LayThongTinHocVienKhoaHoc/maKhoaHoc=${maKhoaHoc}`)
  }
  themKhoaHoc = (formData) => {
    return http.post(`/api/QuanLyKhoaHoc/ThemKhoaHoc`, formData)
  }
  capNhatKhoaHoc = (formData) => {
    return http.put(`/api/QuanLyKhoaHoc/CapNhatKhoaHoc`, formData)
  }
  xoaKhoaHoc=(maKhoaHoc)=>{
    return http.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${maKhoaHoc}`) 
  }
  




}
export const quanLyKhoaHocServices = new QuanLyKhoaHocServices();