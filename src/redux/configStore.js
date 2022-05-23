import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { QuanLyKhoaHocReducer } from "./reducers/QuanLyKhocHocReducer";
import { QuanLyDMKhoaHocReducer } from "./reducers/DanhMucKhoaHocReducer";

const rootReducer = combineReducers({
  QuanLyKhoaHocReducer,
  QuanLyDMKhoaHocReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
