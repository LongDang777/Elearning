import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RegisterAction } from '../../redux/actions/RegisterAction';

export default function Register() {
    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.QuanLyNguoiDungReducer);

    // useEffect(() => {
    //     dispatch(layDanhSachNDAction());
    // }, [])


    // const { mangND } = useSelector(state => state.QuanLyNguoiDungReducer);
    // const userName = mangND.map((value, index) => {
    //     return value.taiKhoan
    // })

    // const userMail = mangND.map((value, index) => {
    //     return value.email
    // })

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDT: '',
            maNhom: '',
            email: '',
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required('Tài khoản không được để trống'),
            // .notOneOf(userName, 'Tài khoản bị trùng trong mã nhóm GP01'),
            matKhau: Yup.string()
                .required("Mật khẩu không được để trống")
                .min(3, "Mật khẩu phải từ 3-12 ký tự")
                .max(12, 'Mật khẩu phải từ 3-12 ký tự'),
            hoTen: Yup.string().required('Họ và tên không được để trống'),
            soDT: Yup.string().required('Số điện thoại không được để trống'),
            email: Yup.string().
                required('Email không được để trống')
                .email('Email không đúng định dạng'),
            // .notOneOf(userMail, 'Email bị trùng trong mã nhóm GP01'),
            maNhom: Yup.string().required('Mã nhóm không được để trống'),
        }),
        onSubmit: (values) => {
            const action = RegisterAction(values);
            dispatch(action);
        }
    })

    useEffect(() => {
        if (!!userInfo?.taiKhoan) {
            dispatch({
                type: 'CLOSE_MODAL',
                isVisible: false,
            })
        }
    }, [userInfo])

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
        }}>
            <div className="form-group">
                <label >Tài khoản</label>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name='taiKhoan' className="form-control" />
                {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                    <div className='alert alert-danger'>{formik.errors.taiKhoan}</div>
                ) : null}

            </div>
            <div className="form-group">
                <label>Mật khẩu</label>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name='matKhau' className="form-control" />
                {formik.touched.matKhau && formik.errors.matKhau ? (
                    <div className='alert alert-danger'>{formik.errors.matKhau}</div>
                ) : null}
            </div>
            <div className="form-group">
                <label>Họ và tên</label>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name='hoTen' className="form-control" />
                {formik.touched.hoTen && formik.errors.hoTen ? (
                    <div className='alert alert-danger'>{formik.errors.hoTen}</div>
                ) : null}
            </div>
            <div className="form-group">
                <label >Số điện thoại</label>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="number" name='soDT' className="form-control" />
                {formik.touched.soDT && formik.errors.soDT ? (
                    <div className='alert alert-danger'>{formik.errors.soDT}</div>
                ) : null}
            </div>
            <div className="form-group">
                <label>Mã nhóm</label>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name='maNhom' className="form-control" />
                {formik.touched.maNhom && formik.errors.maNhom ? (
                    <div className='alert alert-danger'>{formik.errors.maNhom}</div>
                ) : null}
            </div>
            <div className="form-group">
                <label>Email</label>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" name='email' className="form-control" />
                {formik.touched.email && formik.errors.email ? (
                    <div className='alert alert-danger'>{formik.errors.email}</div>
                ) : null}
            </div>

            <ButtonStyled type="submit" className="btn btn-primary">Đăng Ký</ButtonStyled>
        </form>
    )
}

const ButtonStyled = styled.button`
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;

    &:hover {
        color: #fff;
        background-color: #0069d9;
    }
`