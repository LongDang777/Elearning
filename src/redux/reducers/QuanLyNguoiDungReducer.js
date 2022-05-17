
let user = {};
if (localStorage.getItem('LOGIN_USER')) {
  user = JSON.parse(localStorage.getItem('LOGIN_USER'));
}

const stateDefaut = {
  userLogin: user,
  mangND: [],

}

export const QuanLyNguoiDungReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      const { userLogin } = action
      localStorage.setItem('LOGIN_USER', JSON.stringify(userLogin))
      localStorage.setItem('TOKEN', userLogin.accessToken)
      state.userLogin = userLogin;
      return { ...state }
    case 'LOG_OUT_USER':
      localStorage.removeItem('LOGIN_USER');
      localStorage.removeItem('TOKEN')
      state.userLogin = action.userLogin;
      return { ...state }


    default:
      return state
  }
}

