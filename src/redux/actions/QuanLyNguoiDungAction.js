import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { displayLoadingAction, hiddenLoadingAction } from "./LoadingAction";


export const layDanhSachNguoiDungAction = (tuKhoa = '') => {
  return async (dispatch) => {  
    try {
      let result = await quanLyNguoiDungService.layDanhSachNguoiDung(tuKhoa);
      dispatch({
        type: "LAY_DS_NGUOIDUNG",
        mangND: result.data
      })
    } catch (err) {
        console.log("Lỗi lấy ds nguoi dung: ", err);
      }
    }
}

export const layThongTinTaiKhoanAction = () => {
  return async (dispatch) => { 
    try {
      let result = await quanLyNguoiDungService.layThongTinTaiKhoan();
      dispatch({
        type: "LAY_THONGTIN_TK",
        thongTinTK: result.data
      }) 
    } catch (err) {    
      console.log("Lỗi lấy thong tin Tai khoan: ", err);
    }
  }
}