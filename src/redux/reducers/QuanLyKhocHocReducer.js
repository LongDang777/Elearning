const stateDefaut = {
  mangKhoaHoc: [],
  thongTinKH: {},

}
export const QuanLyKhoaHocReducer = (state = stateDefaut, action) =>{
  switch (action.type){
    case "LAY_DS_KHOAHOC":
      state.mangKhoaHoc = action.mangKhoaHoc;
      return {...state}
      case 'LAY_TT_KHOAHOC' :
      state.thongTinKH = action.thongTinKH;
      return {...state}
      
    default: return state
  }
}