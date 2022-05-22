import { message } from 'antd'
import { quanLyNguoiDungServices } from '../../services/QuanLyNguoiDungService'

export const RegisterAction = (userInfo) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungServices.dangKy(userInfo);
            dispatch({
                type: 'REGISTER_USER',
                userInfo: result.data,
            })
            console.log(result.data);
            message.success('Đăng kí thành công')
        }

        catch (errors) {
            console.log(errors);
        }
    }
}
