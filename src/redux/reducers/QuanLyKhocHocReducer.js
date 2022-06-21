let listCart = [];
if (localStorage.getItem('LIST_CART')) {
  listCart = JSON.parse(localStorage.getItem('LIST_CART'));
}

const stateDefaut = {
  mangKhoaHoc: [],
  thongTinKH: {},
  mangDMKhoaHoc: [],
  mangKHTheoDanhMuc: [],
  thongtinDK: {},
  gioHang: listCart,
};
export const QuanLyKhoaHocReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    case 'LAY_DS_KHOAHOC':
      state.mangKhoaHoc = action.mangKhoaHoc;
      return { ...state };
    case 'LAY_TT_KHOAHOC':
      state.thongTinKH = action.thongTinKH;
      return { ...state };
    case 'LAY_DM_KHOAHOC':
      state.mangDMKhoaHoc = action.mangDMKhoaHoc;
      return { ...state };
    case 'LAY_KH_THEODANHMUC':
      state.mangKHTheoDanhMuc = action.mangKHTheoDanhMuc;
      return { ...state };
    case 'DANGKY_KHOAHOC':
      state.thongtinDK = action.thongtinDK;
      return { ...state };
    case 'THEM_GIO_HANG':
      let index = state.gioHang.findIndex((item) => {
        return item.maKhoaHoc === action.data.maKhoaHoc;
      });
      if (index === -1) {
        state.gioHang = [...state.gioHang, action.data];
        localStorage.setItem('LIST_CART', JSON.stringify(state.gioHang));
      }
      return { ...state };
    case 'XOA_GIO_HANG':
      state.gioHang = state.gioHang.filter((item) => {
        return item.maKhoaHoc !== action.data.maKhoaHoc;
      });
      return { ...state };
    default:
      return state;
  }
};
