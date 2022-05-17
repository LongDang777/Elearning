import {applyMiddleware ,combineReducers } from "redux";
import { legacy_createStore as createStore} from 'redux'
import thunk from "redux-thunk";
import { QuanLyKhoaHocReducer } from "./reducers/QuanLyKhocHocReducer";

const rootReducer = combineReducers({
  QuanLyKhoaHocReducer
});

export const store =  createStore(rootReducer,applyMiddleware(thunk))