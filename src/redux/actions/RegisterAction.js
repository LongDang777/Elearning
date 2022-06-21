import { message } from 'antd';
import { quanLyNguoiDungService } from '../../services/QuanLyNguoiDungService';

export const RegisterAction = (userInfo) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKy(userInfo);
      dispatch({
        type: 'REGISTER_USER',
        userInfo: result.data,
      });
      message.success('Đăng kí thành công');
    } catch (errors) {
      console.log(errors.response);
      if (errors.response.data === 'Email đã tồn tại!') {
        return message.error('Email đã tồn tại!');
      }
    }
  };
};
