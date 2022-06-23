import { Button, Form, Input, Select } from 'antd';
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachNguoiDungAction, themNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';
import { LockOutlined, MailOutlined, PhoneOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { useEffect } from 'react';


export default function AddUser() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachNguoiDungAction())
  }, [])

  const { mangND } = useSelector(state => state.QuanLyNguoiDungReducer);

  const userName = mangND.map((value, index) => {
    return value.taiKhoan
  })
  const userMail = mangND.map((value, index) => {
    return value.email
  })
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      hoTen: '',
      email: '',
      soDt: '',
      maNhom: '',
      maLoaiNguoiDung: '',
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().trim('Tài khoản không được để trống').required('Tài khoản không được để trống').notOneOf(userName, 'Tài khoản bị trùng'),
      email: Yup.string()
        .email('Email không đúng định dạng').trim('Email không được để trống').required('Email không được để trống').notOneOf(userMail, 'Email bị trùng'),

    }),
    onSubmit: values => {
      values.maNhom = 'GP01'
      const action = themNguoiDungAction(values);
      dispatch(action);
    },
  })
 
  return (
    <div className='adduser'>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 8 }}>
        <h2 className='mb-5'>Thêm người dùng mới</h2>

        <Form.Item label="Tài Khoản" className='mt-4'>
          <Input name='taiKhoan' placeholder='Tài Khoản' prefix={<UserAddOutlined />} allowClear
            onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.taiKhoan && formik.errors.taiKhoan
            ? (<div className='alert alert-danger'>{formik.errors.taiKhoan}</div>)
            : null}
        </Form.Item>

        <Form.Item label="Họ Tên" name='hoTen' onChange={formik.handleChange}
          rules={[
            {
              required: true,
              message: 'Họ Tên không được để trống',
            },
            {
              whitespace: true,
              message: 'Họ Tên không được để trống',
            },
            {
              min: 3,
              message: 'Họ Tên có ít nhất 3 kí tự',
            }
          ]}
          hasFeedback >
          <Input name='hoTen' allowClear prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item label="Mật Khẩu" name='matKhau' onChange={formik.handleChange}
          rules={[
            {
              required: true,
              message: 'Mật khẩukhông được để trống',
            },
            {
              whitespace: true,
              message: 'Mật khẩu không được để trống',
            },
            {
              min: 6,
              message: 'Mật khẩu ít nhất 6 kí tự',
            }
          ]}
          hasFeedback>
          <Input.Password name='matKhau' type='password' allowClear prefix={< LockOutlined />} />
        </Form.Item>
        <Form.Item label="Nhập lại Mật Khẩu" onChange={formik.handleChange} name='comfirmPassword'
          rules={[
            {
              required: true,
              message: 'Mật khẩu không được để trống',
            },
            {
              whitespace: true,
              message: 'Mật khẩu không được để trống'
            },
            {
              min: 6,
              message: 'Mật khẩu ít nhất 6 kí tự'
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('matKhau') === value) {
                  return Promise.resolve()
                }
                return Promise.reject('Mật khẩu không trùng')
              }
            })
          ]}
          hasFeedback>
          <Input.Password name='matKhau' type='password' allowClear prefix={< LockOutlined />} placeholder='Nhập lại Mật Khẩu' />
        </Form.Item>
        <Form.Item label="Email">
          <Input name='email' allowClear prefix={<MailOutlined />} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.email && formik.errors.email
            ? (<div className='alert alert-danger'>{formik.errors.email}</div>)
            : null}
        </Form.Item>
        <Form.Item label="Số điện thoại" name='soDt' onChange={formik.handleChange} rules={[
          {
            required: true,
            message: 'Số điện thoại được để trống',
          },
          {
            whitespace: true,
            message: 'Số điện thoại được để trống',
          },
          {
            min: 10,
            message: 'Số điện thoại có ít nhất 10 kí tự',
          }
        ]}
          hasFeedback >
          <Input name='soDt' maxLength={11} allowClear prefix={<PhoneOutlined />} />
        </Form.Item>
        <Form.Item label="Loại người dùng" name='maLoaiNguoiDung' onChange={formik.handleChange}
          rules={[
            {
              required: true,
              message: 'Bạn chưa chọn loại người dùng'
            }
          ]}
          hasFeedback>
          <Select name='maLoaiNguoiDung' placeholder='Chọn loại người dùng'
            onChange={(value) => {
              formik.setFieldValue("maLoaiNguoiDung", value)
            }}>
            <Select.Option value='GV'>Giáo Viên</Select.Option>
            <Select.Option value='HV'>Học Viên</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Tác Vụ">
          <Button block htmlType='submit' type='primary'>Thêm người dùng</Button>
        </Form.Item>

      </Form>
    </div>
  );
}
