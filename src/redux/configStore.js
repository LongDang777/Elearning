import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { QuanLyKhoaHocReducer } from "./reducers/QuanLyKhocHocReducer";
import { QuanLyDMKhoaHocReducer } from "./reducers/DanhMucKhoaHocReducer";
import { ModalReducer } from "./reducers/ModalReducer";
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";





const rootReducer = combineReducers({
  QuanLyKhoaHocReducer,
  QuanLyDMKhoaHocReducer,
  ModalReducer,
  QuanLyNguoiDungReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
