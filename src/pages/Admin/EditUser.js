import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
} from 'antd';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux'
import { LockOutlined, MailOutlined, PhoneOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { CapNhatThongTinNguoiDungAction, layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';



const EditUser = (props) => {
  
  const [componentSize, setComponentSize] = useState('default');
  const dispatch = useDispatch();
  useEffect(() => {
    let { taiKhoan } = props.match.params;
    dispatch(layThongTinNguoiDungAction(taiKhoan));
  }, [])

  const { thongTinND, mangND } = useSelector(state => state.QuanLyNguoiDungReducer);

  const mailArr = mangND.map(value => { return value.email }).filter(item => item !== thongTinND.email)

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: thongTinND.taiKhoan,
      hoTen: thongTinND.hoTen,
      email: thongTinND.email,
      soDT: thongTinND.soDT,
      matKhau: thongTinND.matKhau,
      maLoaiNguoiDung: thongTinND.maLoaiNguoiDung,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email không đúng định dạng').trim('Email không được để trống').required('Email không được để trống').notOneOf(mailArr, 'Email bị trùng trong mã nhóm GP03'),

    }),
    onSubmit: values => {
      values.maNhom = 'GP01'
      const action = CapNhatThongTinNguoiDungAction(values);
      dispatch(action);
    },
  })

  return (

    <Form
      onSubmitCapture={formik.handleSubmit}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 8 }}>
      <h2>Sửa thông tin <span className='text-primary'>{thongTinND.taiKhoan}</span> </h2>
      <h1>Trên Api ko có dữ liệu taiKhoan để edit bất kì  tài khoản nào,
        chỉ edit dc 1 tài khoản đang đăng nhập trong profile
      </h1>

      <Form.Item label="Tài Khoản" className='mt-4'>
        <Input name='taiKhoan' disabled value={formik.values.taiKhoan} prefix={<UserAddOutlined />} allowClear />
      </Form.Item>
      <Form.Item label="Họ Tên"
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
        <Input name='hoTen' value={formik.values.hoTen} onChange={formik.handleChange} allowClear prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item label="Mật Khẩu"
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
        <Input.Password name='matKhau' value={formik.values.matKhau} onChange={formik.handleChange} type='password' allowClear prefix={< LockOutlined />} />
      </Form.Item>
      <Form.Item label="Nhập lại Mật Khẩu"
        rules={[
          {
            required: true,
            message: 'Mật khẩukhông được để trống',
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
        <Input.Password name='matKhau' value={formik.values.matKhau} onChange={formik.handleChange} type='password' allowClear prefix={< LockOutlined />} placeholder='Nhập lại Mật Khẩu' />
      </Form.Item>
      <Form.Item label="Email"
        rules={[
          {
            required: true,
            message: 'Email không được để trống',
          },
          {
            type: 'email',
            message: 'Email không đúng định dạng',
          },

        ]}
        hasFeedback>
        <Input name='email' value={formik.values.email} allowClear prefix={<MailOutlined />} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.email && formik.errors.email
          ? (<div className='alert alert-danger'>{formik.errors.email}</div>)
          : null}
      </Form.Item>
      <Form.Item label="Số điện thoại"
        rules={[
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
        <Input name='soDT' value={formik.values.soDT} onChange={formik.handleChange} allowClear prefix={<PhoneOutlined />} />
      </Form.Item>
      <Form.Item label="Loại người dùng" onChange={formik.handleChange}
        rules={[
          {
            required: true,
            message: 'Bạn chưa chọn loại người dùng'
          }
        ]}
        hasFeedback>
        <Select name='maLoaiNguoiDung'
          onChange={(value) => {
            formik.setFieldValue("maLoaiNguoiDung", value)
          }} value={formik.values.maLoaiNguoiDung}>
          <Select.Option value='GV'>Giáo Viên</Select.Option>
          <Select.Option value='HV'>Học Viên</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Tác Vụ">
        <Button block htmlType='submit' type='primary' >Cập nhật người dùng</Button>
      </Form.Item>
    </Form>
  );
};

export default EditUser