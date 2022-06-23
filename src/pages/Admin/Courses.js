import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Input } from 'antd';
import { EditOutlined, DeleteOutlined, SearchOutlined, CalendarOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'

import styled from 'styled-components';
import { layDanhSachKhoaHocAction, xoaKhoaHocAction } from '../../redux/actions/QuanLyKhoaHocAction';
import { history } from '../../App';
import Course from '../Home/OurCourse/Course';


export default function Courses() {

  const { Search } = Input;

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(layDanhSachKhoaHocAction());
  }, [])
  const { mangKhoaHoc } = useSelector(state => state.QuanLyKhoaHocReducer);

  const columns = [
    { 
      title:'STT',
      dataIndex:'index',
      key: '',
      render : (value, item, index) => {
        return <Fragment>
          {index + 1}
        </Fragment>
      }
    },
    {
      title: 'Mã Khoá Học',
      dataIndex: 'maKhoaHoc',
      value: (text, object) => { return <span>{text}</span> },
      sorter: (a, b) => a.maKhoaHoc - b.maKhoaHoc,
      sortDirections: ['descend', 'ascend'],

    },
    {
      title: 'Hình Ảnh',
      dataIndex: 'hinhAnh',
      render: (text, films, index) => {
        return <Fragment >
          <img src={films.hinhAnh} alt={films.tenPhim} height={100} onError={(e) => (e.target.onerror = null, e.target.src = `http://picsum.photos/id/${index}/70/70`)} />
        </Fragment>
      },
      width: "13%"
    },
    {
      title: 'Tên Khoá Học',
      dataIndex: 'tenKhoaHoc',
      sorter: (a, b) => {
        let tenKhoaHocA = a.tenKhoaHoc.toLowerCase().trim();
        let tenKhoaHocB = b.tenKhoaHoc.toLowerCase().trim();
        if (tenKhoaHocA > tenKhoaHocB) {
          return 1;
        }
        return -1
      },

    },
    {
      title: 'Mô Tả',
      dataIndex: 'moTa',
      render: (text, khoaHoc) => {
        return <Fragment>
          {khoaHoc.moTa.length > 20 ? khoaHoc.moTa.substr(0, 30) + '...' : khoaHoc.moTa}
        </Fragment>
      },
      
    },
    {
      title: 'Danh Mục',
      dataIndex:'danhMucKhoaHoc',
      render: (text, khoaHoc) => {
        return <Fragment>
          {khoaHoc.danhMucKhoaHoc.maDanhMucKhoahoc}
        </Fragment>
      },
    },
    {
      title: 'Người Tạo',
      dataIndex:'nguoiTao',
      render: (text, khoaHoc) => {
        return <Fragment>
          {khoaHoc.nguoiTao.hoTen}
        </Fragment>
      },
    },
    {
      title: 'Hành Động',
      dataIndex: 'maPhim',
      render: (text, khoaHoc) => {
        return (
          <Fragment>
            <NavLink key={1} style={{ fontSize: 20 }} to={`/admin/editcourses/${khoaHoc.maKhoaHoc}`} >
              <EditOutlined />
            </NavLink>
            <DeleteOutlined key={2} className='text-danger ml-3' style={{ fontSize: 20, }}
              onClick={() => {
                if (window.confirm('Bạn có chắc muốn xoá khoá học ' + khoaHoc.maKhoaHoc)) {
                  dispatch(xoaKhoaHocAction(khoaHoc.maKhoaHoc))
                }
              }} />
          </Fragment>)
      },
    },
  ];

  const data = mangKhoaHoc

  const onSearch = (value) => {
    dispatch(layDanhSachKhoaHocAction(value))
  };
 
  return (
    <div className='courseManager'>
      <h2>Quản Lý Khoá Học</h2>
      <Button className='my-3' type="primary" style={{ background: "#40a9ff" }} onClick={() => {
        history.push('/admin/addcourses')
      }} >Thêm Khoá Học</Button>
      <Search
        className='mb-4'
        placeholder="Search..."
        size="large"
        enterButton={<SearchOutlined />}
        onSearch={onSearch}
      />
      <Table columns={columns} dataSource={data} rowKey={"maKhoaHoc"} />

    </div>
  )
}
