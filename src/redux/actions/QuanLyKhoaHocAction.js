import { quanLyKhoaHocServices } from "../../services/QuanLyKhoaHocServices";
//animation chờ 
import { displayLoadingAction, hiddenLoadingAction } from "./LoadingAction";


export const layDanhSachKhoaHocAction = (tenKhoaHoc = '') => {
  return async (dispatch) => {

    dispatch(displayLoadingAction)
    try {
      let result = await quanLyKhoaHocServices.laydanhSachKhoaHoc(tenKhoaHoc);
      dispatch({
        type: "LAY_DS_KHOAHOC",
        mangKhoaHoc: result.data
      })
      dispatch(hiddenLoadingAction)
    } catch (err) {
      dispatch(hiddenLoadingAction)
      console.log("Lỗi lấy ds khoá học: ", err);
    }
  }
}
export const layThongTinKhoaHocAction = (maKhoaHoc) => {
  return async (dispatch) => {
    dispatch(displayLoadingAction)
    try {
      let result = await quanLyKhoaHocServices.layThongTinKhoaHoc(maKhoaHoc);
      dispatch({
        type: "LAY_TT_KHOAHOC",
        thongTinKH: result.data
      })
      dispatch(hiddenLoadingAction)
    } catch (err) {
      dispatch(hiddenLoadingAction)
      console.log("Lỗi lấy thong tin khoá học: ", err);
    }
  }
}
export const layDanhMucKhoaHocAction = () => {
  return async (dispatch) => {
    try {
      let result = await quanLyKhoaHocServices.layDanhMucKhoaHoc();
      dispatch({
        type: "LAY_DM_KHOAHOC",
        mangDMKhoaHoc: result.data,
      });
    } catch (err) {
      console.log("Lỗi lấy danh mục khoá học: ", err);
    }
  };
};
export const layKhoaHocTheoDanhMuc = (maDanhMuc = '') => {
  return async (dispatch) => {

    dispatch(displayLoadingAction)
    try {
      let result = await quanLyKhoaHocServices.layKhoaHocTheoDanhMuc(maDanhMuc);
      dispatch({
        type: "LAY_KH_THEODANHMUC",
        mangKHTheoDanhMuc: result.data
      })
      dispatch(hiddenLoadingAction)
    } catch (err) {
      dispatch(hiddenLoadingAction)
      console.log("Lỗi lấy khoá học theo danh mục: ", err);
    }
  }
}
export const themGioHangAction = data =>{
  return dispatch => {
    dispatch({
			type: 'THEM_GIO_HANG',
			data,
		});
  }
}