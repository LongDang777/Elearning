import { message } from "antd";
import { history } from "../../App";
import { quanLyKhoaHocServices } from "../../services/QuanLyKhoaHocServices";

export const layDanhSachKhoaHocAction = (tenKhoaHoc = "") => {
  return async (dispatch) => {
    try {
      let result = await quanLyKhoaHocServices.laydanhSachKhoaHoc(tenKhoaHoc);
      dispatch({
        type: "LAY_DS_KHOAHOC",
        mangKhoaHoc: result.data,
      });
    } catch (err) {
      console.log("Lỗi lấy ds khoá học: ", err);
    }
  };
};
export const layThongTinKhoaHocAction = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      let result = await quanLyKhoaHocServices.layThongTinKhoaHoc(maKhoaHoc);
      dispatch({
        type: "LAY_TT_KHOAHOC",
        thongTinKH: result.data,
      });
    } catch (err) {
      console.log("Lỗi lấy thong tin khoá học: ", err);
    }
  };
};
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
export const layKhoaHocTheoDanhMuc = (maDanhMuc = "") => {
  return async (dispatch) => {
    try {
      let result = await quanLyKhoaHocServices.layKhoaHocTheoDanhMuc(maDanhMuc);
      dispatch({
        type: "LAY_KH_THEODANHMUC",
        mangKHTheoDanhMuc: result.data,
      });
    } catch (err) {
      console.log("Lỗi lấy khoá học theo danh mục: ", err);
    }
  }
}
export const xoaKhoaHocAction = (maKhoaHoc) => {
  return async (dispatch)=>{
      try {
          let result = await quanLyKhoaHocServices.xoaKhoaHoc(maKhoaHoc);
          message.success('Xoá khoá học thành công')
          dispatch(layDanhSachKhoaHocAction())  
      }catch(err){
          message.warning(err.response.data)
          console.log('err',err.response.data);
      }
  }
}
export const themKhoaHocAction = (formData) =>{
  return async (dispatch)=>{
      try {
          let result = await quanLyKhoaHocServices.themKhoaHocUpLoadHinh(formData);
          message.success('Thêm khoá học thành công')
          history.push('/admin/courses')
      }catch(err){
        message.warning(err.response.data)
          console.log('Lỗi thêm khoá học: ',err.response.data);
          
      }
  }
}
export const CapNhatThongTinKhoaHocAction = (formData) =>{
  return async (dispatch)=>{
      try {
          let result = await quanLyKhoaHocServices.capNhatKhoaHoc(formData);
          message.success('Cập nhật khoá học thành công')
          history.push('/admin/courses')
          dispatch(layDanhSachKhoaHocAction())   
      }catch(err){
        message.warning(err.message)
        console.log('err',err.response.data);
      }
  }
}
export const dangKyKhoaHoc = (data) => {
  return async (dispatch) => {
    try {
      let result = await quanLyKhoaHocServices.dangKyKhoaHoc(data);
      message.success("Đăng kí hkhóa học thành công");
      dispatch({
        type: "DANGKY_KHOAHOC",
        thongtinDK: result.data,
      });
    } catch (error) {
      message.warning("Khóa học đã được đăng ký");
    }
  };
};

export const themGioHangAction = (data) => {
  return (dispatch) => {
    dispatch({
      type: "THEM_GIO_HANG",
      data,
    });
  };
};

export const xoaGioHangAction = (data) => {
  return (dispatch) => {
    dispatch({
      type: "XOA_GIO_HANG",
      data,
    });
  };
};
