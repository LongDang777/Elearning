import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { Input, Table } from 'antd';
import React, { Fragment } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { history } from '../../App';
import { layDanhSachNguoiDungAction, xoaNDAction } from '../../redux/actions/QuanLyNguoiDungAction';


export default function Customer() {


  const dispatch = useDispatch();
  useEffect(()=>{ 
    dispatch(layDanhSachNguoiDungAction())
  },[])

  
  const mangND = useSelector(state=> state.QuanLyNguoiDungReducer.mangND)
  
  
  
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
      title: 'Tài Khoản',
      dataIndex: 'taiKhoan',
      sorter: (a, b) => {
        let taiKhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if (taiKhoanA > taiKhoanB) {
          return 1;
        }
        return -1
      },
    },     
    {
      title: 'Họ Tên',
      dataIndex: 'hoTen',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Số Điện Thoại',
      dataIndex: 'soDt',
    },
    {
      title: 'Loại Người Dùng',
      dataIndex: 'maLoaiNguoiDung',
      sorter: (a, b) => {
        let loaiA = a.maLoaiNguoiDung
        let loaiB = b.maLoaiNguoiDung
        if (loaiA > loaiB) {
          return 1;
        }
        return -1
      },
    },
    
    {
      title: 'Hành Động',
      dataIndex: 'taiKhoan',
      
      render: (text, ND) => {
        return (
          <Fragment key={`${ND.taiKhoan}`} >
            <NavLink style={{ fontSize: 20 }} to={`/admin/edituser/${ND.taiKhoan}`} >
              <EditOutlined />
            </NavLink>
            <DeleteOutlined  className='text-danger ml-3' style={{ fontSize: 20, }} onClick={() => {
              if (window.confirm('Bạn có chắc muốn xoá người dùng' + ND.taiKhoan)) {
                dispatch(xoaNDAction(ND.taiKhoan))
              }
            }}/>
          </Fragment>)
      },
    },
    
  ];
  
  
  const { Search } = Input;
  
  const onSearch = (value) => {
    dispatch(layDanhSachNguoiDungAction(value))
  };
  
  return (
    <div className='customer'>
    <h2>Quản Lý Người Dùng</h2>
    <button className='my-4 btn btn-primary'  onClick={() => {
      history.push('/admin/adduser')
    }} >Thêm Người Dùng</button>
    <Search
      className='mb-5'
      placeholder="Search name..."
      size="large"
      enterButton={<SearchOutlined />} 
      onSearch={onSearch}
    />
    <Table key={`${mangND.taiKhoan}`} columns={columns} dataSource={mangND}  rowKey={"taiKhoan"} />
  </div>
  )
}
