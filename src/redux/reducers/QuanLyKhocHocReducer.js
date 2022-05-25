const stateDefaut = {
  mangKhoaHoc: [],
  thongTinKH: {},
  mangDMKhoaHoc: [],
  mangKHTheoDanhMuc: [],
  thongtinDK: {},
  gioHang : [],

}
export const QuanLyKhoaHocReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    case "LAY_DS_KHOAHOC":
      state.mangKhoaHoc = action.mangKhoaHoc;
      return { ...state }
    case 'LAY_TT_KHOAHOC':
      state.thongTinKH = action.thongTinKH;
      return { ...state }
    case "LAY_DM_KHOAHOC":
      state.mangDMKhoaHoc = action.mangDMKhoaHoc;
      return { ...state };
    case "LAY_KH_THEODANHMUC":
      state.mangKHTheoDanhMuc = action.mangKHTheoDanhMuc;
      return { ...state };
    case 'DANGKY_KHOAHOC':
      state.thongtinDK = action.thongtinDK
      return { ...state };
    case 'THEM_GIO_HANG':
      let index = state.gioHang.findIndex(item => {
        return item.maKhoaHoc === action.data.maKhoaHoc;
      });
      if (index === -1) {
        state.gioHang = [...state.gioHang, action.data];
      }
      return { ...state };

    default: return state
  }
}