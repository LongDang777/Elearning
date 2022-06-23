
import { Button, Form, Input, Select } from 'antd';
import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { LockOutlined, MailOutlined, PhoneOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { layDanhSachKhoaHocAction, themKhoaHocAction, layDanhMucKhoaHocAction } from '../../redux/actions/QuanLyKhoaHocAction';



export default function AddCourses() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachKhoaHocAction())
    dispatch(layDanhMucKhoaHocAction())
  }, [])

  const { mangKhoaHoc, mangDMKhoaHoc } = useSelector(state => state.QuanLyKhoaHocReducer);

  const maKhoaHoc = mangKhoaHoc.map((value, index) => {
    return value.maKhoaHoc
  })

  const LOGIN_USER = JSON.parse(localStorage.getItem("LOGIN_USER"));


  const formik = useFormik({
    initialValues: {
      maKhoaHoc: '',
      tenKhoaHoc: '',
      moTa: '',
      luotXem: '',
      danhGia: '',
      hinhAnh: '',
      maDanhMucKhoaHoc: '',
      taiKhoanNguoiTao: LOGIN_USER.taiKhoan,
    },
    validationSchema: Yup.object({
      maKhoaHoc: Yup.string().trim('Mã Khoá Học không được để trống').required('Mã Khoá Học không được để trống').notOneOf(maKhoaHoc, 'Mã Khoá Học đã tồn tại'),
      tenKhoaHoc: Yup.string().trim('Tên Khoá Học không được để trống').required('Tên Khoá Học không được để trống'),
       
      moTa: Yup.string().trim('Mô tả không được để trống').required('Mô tả không được để trống'),
      danhGia: Yup.string().required('Đánh giá không được để trống'),
      luotXem: Yup.string().required('Lượt xem không được để trống'),


    }),
    onSubmit: values => {
      values.maNhom = 'GP01'
      let formData = new FormData();
      for (let key in values) {
        if (key !== 'hinhAnh') {
          formData.append(key, values[key]);
        } else {
          formData.append('File', values.hinhAnh, values.hinhAnh.name);
        }
      }
      console.log(values.hinhAnh);
      dispatch(themKhoaHocAction(formData));
    },
  })


  const convertSelecDMKH = () => {
    return mangDMKhoaHoc.map((danhMuc) => {
      return { label: danhMuc.danhMucKhoaHoc, value: danhMuc.maDanhMuc }
    })
  }
  const handleChangeDMKH = (value) => {
    formik.setFieldValue('maDanhMucKhoaHoc', value)
  }


  const [imgSrc, setImgSrc] = useState('')


  const handelChangeFile = (e) => {
    let file = e.target.files[0];
    if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result)
      }
      formik.setFieldValue('hinhAnh', file)
    }
  }
  return (
    <div className='addcourse'>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 8 }}>
        <h2 className='mb-5'>Thêm Khoá Học Mới</h2>

        <Form.Item label="Mã khoá học" className='mt-4'>
          <Input name='maKhoaHoc' placeholder='Mã Khoá Học' prefix={<UserAddOutlined />} allowClear
            onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.maKhoaHoc && formik.errors.maKhoaHoc
            ? (<div className='alert alert-danger'>{formik.errors.maKhoaHoc}</div>)
            : null}
        </Form.Item>

        <Form.Item label="Tên khoá học" className='mt-4'>
          <Input name='tenKhoaHoc' placeholder='Tài Khoản' prefix={<UserAddOutlined />} allowClear
            onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.tenKhoaHoc && formik.errors.tenKhoaHoc
            ? (<div className='alert alert-danger'>{formik.errors.tenKhoaHoc}</div>)
            : null}
        </Form.Item>

        <Form.Item label="Mô Tả" >
          <Input name='moTa' onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.moTa && formik.errors.moTa ? (
            <div className='alert alert-danger'>{formik.errors.moTa}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Đánh Giá">
          <Input style={{ width: '50%' }} placeholder='Thêm đánh giá từ 1-10' name='danhGia' onChange={formik.handleChange} onBlur={formik.handleBlur} type='number' min={1} max={10} maxLength={2}
          />
          {formik.touched.danhGia && formik.errors.danhGia ? (
            <div className='alert alert-danger'>{formik.errors.danhGia}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Lượt Xem">
          <Input style={{ width: '50%' }} placeholder='Thêm lượt xem' name='luotXem' onChange={formik.handleChange} onBlur={formik.handleBlur} type='number'
          />
          {formik.touched.luotXem && formik.errors.luotXem ? (
            <div className='alert alert-danger'>{formik.errors.luotXem}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Danh mục khoá học">
          <Select options={convertSelecDMKH()} onChange={handleChangeDMKH} placeholder='Chọn Danh Mục Khoá Học' />
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

        <Form.Item label="Hình Ảnh">
          <input type='file' onChange={handelChangeFile} accept='image/png, image/jpeg, image/png ,image/gif ,image/jpg' />
          <br />
          <img src={imgSrc} alt="" width={150} height={200} />
        </Form.Item>

        <Form.Item label="Tác Vụ">
          <Button block htmlType='submit' type='primary'>Thêm Khoá Học</Button>
        </Form.Item>

      </Form>
    </div>
  );
}
