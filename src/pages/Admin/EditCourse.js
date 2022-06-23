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
import { CapNhatThongTinKhoaHocAction, layThongTinKhoaHocAction, layDanhMucKhoaHocAction } from '../../redux/actions/QuanLyKhoaHocAction';




const EditCourse = (props) => {

  const [componentSize, setComponentSize] = useState('default');
  const dispatch = useDispatch();
  useEffect(() => {
    let { maKhoaHoc } = props.match.params;

    dispatch(layThongTinKhoaHocAction(maKhoaHoc));
    dispatch(layDanhMucKhoaHocAction())
  }, [])

  const { thongTinKH, mangDMKhoaHoc } = useSelector(state => state.QuanLyKhoaHocReducer);

  const danhMucKH = thongTinKH.danhMucKhoaHoc
  let danhMucKhoaHoc = [];
  const maDanhMuc = () => {
    for (let i in danhMucKH) {
      danhMucKhoaHoc.push(danhMucKH[i])
    }
  }
  maDanhMuc()

  const nguoiTaoKH = thongTinKH.nguoiTao
  let nguoiTaoKhoaHoc = [];
  const nguoiTao = () => {
    for (let i in nguoiTaoKH) {
      nguoiTaoKhoaHoc.push(nguoiTaoKH[i])
    }
  }
  nguoiTao()

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maKhoaHoc: thongTinKH.maKhoaHoc,
      biDanh: thongTinKH.biDanh,
      tenKhoaHoc: thongTinKH.tenKhoaHoc,
      moTa: thongTinKH.moTa,
      luotXem: thongTinKH.luotXem,
      danhGia: 0,
      ngayTao: thongTinKH.ngayTao,
      maDanhMucKhoaHoc: danhMucKhoaHoc[0],
      taiKhoanNguoiTao: nguoiTaoKhoaHoc[1],
      hinhAnh: null
    },
    validationSchema: Yup.object({
      moTa: Yup.string().trim('Mô tả không được để trống').required('Mô tả không được để trống'),

    }),
    onSubmit: values => {
      values.maNhom = 'GP01'
      let formData = new FormData();
      for (let key in values) {
        if (key !== 'hinhAnh') {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append('File', values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      console.log(formData);
      const action = CapNhatThongTinKhoaHocAction(formData);
      dispatch(action);
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
  const [img, setImg] = useState('')

  const handelChangeFile = async (e) => {
    let file = e.target.files[0];

    if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImg(e.target.result)
      }
      await formik.setFieldValue('hinhAnh', file)
    }
  }
  return (

    <Form
      onSubmitCapture={formik.handleSubmit}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 8 }}>
      <h2>Sửa thông tin <span className='text-primary'>{thongTinKH.tenKhoaHoc}</span> </h2>
      <Form.Item label="Mã khoá học" className='mt-4'>
        <Input name='maKhoaHoc' onChange={formik.handleChange} disabled value={formik.values.maKhoaHoc} prefix={<UserAddOutlined />} allowClear />
      </Form.Item>

      <Form.Item label="Mô Tả" >
        <Input name='moTa' onChange={formik.handleChange} value={formik.values.moTa} />
        {formik.touched.moTa && formik.errors.moTa ? (
          <div className='alert alert-danger'>{formik.errors.moTa}</div>
        ) : null}
      </Form.Item>

      <Form.Item label="Danh mục khoá học">
        <Select options={convertSelecDMKH()} name='maDanhMucKhoaHoc' onChange={handleChangeDMKH} value={formik.values.maDanhMucKhoaHoc}/>
      </Form.Item>

      <Form.Item label="Hình Ảnh">
        <input type='file' onChange={handelChangeFile} accept='image/png, image/jpeg, image/png ,image/gif' />
        <br />
        <img alt="" width={150} height={200} src={img === '' ? thongTinKH.hinhAnh : img} />
      </Form.Item>

      <Form.Item label="Tác Vụ">
        <Button block htmlType='submit' type='primary' >Cập nhật khoá học</Button>
      </Form.Item>
    </Form>
  );
};

export default EditCourse