let user = {};
let userInfo = {};
if (localStorage.getItem('LOGIN_USER')) {
  user = JSON.parse(localStorage.getItem('LOGIN_USER'));
}
if (localStorage.getItem('USER_INFO')) {
  userInfo = JSON.parse(localStorage.getItem('USER_INFO'));
}

const stateDefaut = {
  userLogin: user,
  userInfo: {},
  mangND: [],
  thongTinTK: userInfo,
};

export const QuanLyNguoiDungReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      const { userLogin } = action;
      localStorage.setItem('LOGIN_USER', JSON.stringify(userLogin));
      localStorage.setItem('TOKEN', userLogin.accessToken);
      state.userLogin = userLogin;
      return { ...state };
    case 'LOG_OUT_USER':
      localStorage.removeItem('LOGIN_USER');
      localStorage.removeItem('USER_INFO');
      localStorage.removeItem('TOKEN');
      state.userLogin = action.userLogin;
      return { ...state };
    case 'REGISTER_USER':
      state.userInfo = action.userInfo;
      return { ...state };
    case 'LAY_DS_NGUOIDUNG':
      state.mangND = action.mangND;
      return { ...state };
    case 'LAY_THONGTIN_TK':
      const { thongTinTK } = action;
      localStorage.setItem('USER_INFO', JSON.stringify(thongTinTK));
      state.thongTinTK = thongTinTK;
      return { ...state };
    case 'CAP_NHAT_THONGTIN_TK':
      const { newUserInfo } = action;
      localStorage.setItem('USER_INFO', JSON.stringify(newUserInfo));
      state.thongTinTK = action.newUserInfo;
      return { ...state };

    default:
      return state;
  }
};
