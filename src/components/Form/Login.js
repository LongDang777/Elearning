import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { LoginAction } from '../../redux/actions/LoginAction';
import { layThongTinTaiKhoanAction } from '../../redux/actions/QuanLyNguoiDungAction';
import { history } from '../../App';
// import { history } from '../../App';

export default function Login() {
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      maNhom: 'GP01',
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required('Tài khoản không được để trống'),
      matKhau: Yup.string()
        .required('Mật khẩu không được để trống')
        .min(6, 'Mật khẩu phải từ 6-12 ký tự')
        .max(12, 'Mật khẩu phải từ 6-12 ký tự'),
    }),
    onSubmit: (values) => {
      const action = LoginAction(values);
      dispatch(action);
    },
  });

  useEffect(() => {
    if (!!userLogin.taiKhoan) {
      dispatch({
        type: 'CLOSE_MODAL',
        isVisible: false,
      });
    }
    if (userLogin.maLoaiNguoiDung === 'GV') {
        alert('Bạn là thành viên của Quản trị viên, trình duyệt sẽ chuyển sang trang quản trị')
        history.push('/admin')
    }
  }, [userLogin]);

  const getUserInfo = () => {
    dispatch(layThongTinTaiKhoanAction());
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(e);
      }}
    >
      <div className="form-group">
        <label>Tài khoản</label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          name="taiKhoan"
          className="form-control"
        />
        {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
          <div className="alert alert-danger">{formik.errors.taiKhoan}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Mật khẩu</label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
          name="matKhau"
          className="form-control"
        />
        {formik.touched.matKhau && formik.errors.matKhau ? (
          <div className="alert alert-danger">{formik.errors.matKhau}</div>
        ) : null}
      </div>
      <ButtonStyled type="submit" className="btn" onClick={getUserInfo}>
        Đăng Nhập
      </ButtonStyled>
    </form>
  );
}

const ButtonStyled = styled.button`
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;

  &:hover {
    color: #fff;
    background-color: #0069d9;
  }
`;
