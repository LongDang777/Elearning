const stateDefaut = {
  mangKhoaHoc: [],


}
export const QuanLyKhoaHocReducer = (state = stateDefaut, action) =>{
  switch (action.type){
    case "LAY_DS_KHOAHOC":
      state.mangKhoaHoc = action.mangKhoaHoc;




    return {...state}
    default: return state
  }
}