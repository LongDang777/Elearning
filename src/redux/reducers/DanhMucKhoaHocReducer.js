const stateDefaut = {
  mangDMKhoaHoc: [],
};
export const QuanLyDMKhoaHocReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    case "LAY_DM_KHOAHOC":
      state.mangDMKhoaHoc = action.mangDMKhoaHoc;
      return { ...state };
    default:
      return state;
  }
};
