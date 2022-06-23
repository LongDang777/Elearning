import { message } from "antd";
import { history } from "../../App";
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
export const layThongTinNguoiDungAction = (taiKhoan) => {
  return async (dispatch) => { 
    try {
      let result = await quanLyNguoiDungService.layThongTinNguoiDung(taiKhoan);
      dispatch({
        type: "LAY_THONGTIN_ND",
        thongTinND: result.data
      }) 
    } catch (err) {    
      console.log("Lỗi lấy thong tin người dùng: ", err);
    }
  }
}
export const xoaNDAction = (taiKhoan) => {
  return async (dispatch)=>{
      try {
          let result = await quanLyNguoiDungService.xoaND(taiKhoan);
          message.success('Xoá tài khoản thành công')
          dispatch(layDanhSachNguoiDungAction())  
      }catch(err){
          message.warning(err.response.data)
          console.log('err',err);
      }
  }
}
export const themNguoiDungAction = (formData) =>{
  return async (dispatch)=>{
      try {
          let result = await quanLyNguoiDungService.themNguoiDung(formData);
          message.success('Thêm người dùng thành công')
          history.push('/admin/customers')
      }catch(err){
        message.warning(err.response.data)
          console.log('err',err.response.data);
          
      }
  }
}

export const CapNhatThongTinNguoiDungAction = (formData) =>{
  return async (dispatch)=>{
      try {
          let result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(formData);
          message.success('Cập nhật người dùng thành công')
          history.push('/admin/customers')
          dispatch(layDanhSachNguoiDungAction())   
      }catch(err){
        message.warning(err.response.data)
          console.log('err',err.response.data);
      }
  }
}

