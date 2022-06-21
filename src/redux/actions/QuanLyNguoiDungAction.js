import { quanLyNguoiDungService } from '../../services/QuanLyNguoiDungService';
import { message } from 'antd';
// import { displayLoadingAction, hiddenLoadingAction } from "./LoadingAction";

export const layDanhSachNguoiDungAction = (tuKhoa = '') => {
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDungService.layDanhSachNguoiDung(tuKhoa);
      dispatch({
        type: 'LAY_DS_NGUOIDUNG',
        mangND: result.data,
      });
    } catch (err) {
      console.log('Lỗi lấy ds nguoi dung: ', err);
    }
  };
};

export const layThongTinTaiKhoanAction = () => {
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDungService.layThongTinTaiKhoan();
      dispatch({
        type: 'LAY_THONGTIN_TK',
        thongTinTK: result.data,
      });
    } catch (err) {
      console.log('Lỗi lấy thông tin tài khoản: ', err);
    }
  };
};

export const capNhatThongTinTaiKhoanAction = (newUserInfo) => {
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDungService.capNhatThongTinTaiKhoan(
        newUserInfo,
      );
      // dispatch({
      //   type: 'CAP_NHAT_THONGTIN_TK',
      //   newUserInfo: result.data,
      // });
      message.success('Cập nhât thành công');
    } catch (err) {
      console.log('Lỗi cập nhật tin tài khoản: ', err);
    }
  };
};
