import { quanLyKhoaHocServices } from "../../services/QuanLyKhoaHocServices";

export const layDanhMucKhoaHocAction = () => {
  return async (dispatch) => {
    try {
      let result = await quanLyKhoaHocServices.layDanhMucKhoaHoc();
      dispatch({
        type: "LAY_DM_KHOAHOC",
        mangDMKhoaHoc: result.data,
      });
    } catch (err) {
      console.log("Lỗi lấy danh mujc khoá học: ", err);
    }
  };
};
