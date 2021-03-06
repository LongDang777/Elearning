import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";


export const LoginAction = (userLogin) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(userLogin)
            if (result.status === 200) {
                dispatch({
                    type: 'LOGIN_USER',
                    userLogin: result.data,
                })
            }
        }
        catch (errors) {
            console.log(errors);
        }
    }
}
