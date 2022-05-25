import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { layDanhMucKhoaHocAction, layDanhSachKhoaHocAction, layKhoaHocTheoDanhMuc, layThongTinKhoaHocAction } from '../../redux/actions/QuanLyKhoaHocAction';
import { layThongTinTaiKhoanAction } from '../../redux/actions/QuanLyNguoiDungAction';
import TableItemCourse from './TableItemCourse';
import { SearchOutlined,  } from '@ant-design/icons';
import { Input } from 'antd';
import classNames from 'classnames';


export default function AllCourse(props) {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(layDanhSachKhoaHocAction())
    dispatch(layThongTinTaiKhoanAction())
    dispatch(layDanhMucKhoaHocAction())
    dispatch(layKhoaHocTheoDanhMuc())
    // dispatch(layThongTinKhoaHocAction())
  }, [])
  const { mangKhoaHoc, mangDMKhoaHoc, mangKHTheoDanhMuc} = useSelector(state => state.QuanLyKhoaHocReducer)

  const {thongTinTK} = useSelector(state => state.QuanLyNguoiDungReducer)

  

  const[value ,setValue] = useState(false)
  const [mangkhoaHocNew, setMangkhoaHocNew] = useState([])

  const sapXepAZ = (a, b) => {
    const tenKhoaHocA = a.tenKhoaHoc.toUpperCase();
    const tenKhoaHocB = b.tenKhoaHoc.toUpperCase();
    let ketQua = 0;
    if (tenKhoaHocA > tenKhoaHocB) {
      ketQua = 1;
    } else if (tenKhoaHocA < tenKhoaHocB) {
      ketQua = -1;
    }
    return ketQua;
  };

  const sapXepLuotXem = (a, b) => {
    const luotXemA = a.luotXem;
    const luotXemB = b.luotXem;
    let ketQua = 0;
    if (luotXemA > luotXemB) {
      ketQua = -1;
    } else if (luotXemA < luotXemB) {
      ketQua = 1;
    }
    return ketQua;
  };

  const { Search } = Input;
  const onSearch = (value) => {
    dispatch(layDanhSachKhoaHocAction(value.toLowerCase()))
    setValue(false)
  };

	const renderCategoryHTML = () => {
		return mangDMKhoaHoc.map((item, index) => {
			return (
				<li key={index} className="nav-item">
					<button type='button'
            data-toggle="tab"
						className={classNames('category-items', 'nav-link')}
						onClick={() => {
							dispatch(layKhoaHocTheoDanhMuc(item.maDanhMuc));
              setValue(true)
						}}
					>
						{item.tenDanhMuc}
					</button>
				</li>
			);
		});
	};

  return (
    <section className='allCourse pt-5'>
      <div className='wrap-detailCourse'>
        <div
          className=' header-detailCourse'
          style={{
            backgroundImage: "url('../../img/15.jpg')",
          }}
        >
          <div
            className='overflow'
            style={{ backgroundImage: "url('../../img/bg-2.png')" }}
          ></div>
          <div className='title detail-course'>
            <span>KHÓA HỌC CỦA CHÚNG TÔI</span>
            <h4>
              <NavLink to='/'>Trang chủ</NavLink>
              {' > '}
              <span>Khóa học của chúng tôi</span>
            </h4>
          </div>
        </div>
      </div>
      <div className='wrap-top-content'>
        <div className='tittle'>
          <div className='sort'>
            <div className='input-group sort-tool'>
              <div className='dropdown'>
                <button
                  className='btn btn-effect dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Sắp xếp khóa học
                </button>
                <div
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuButton'
                >
                  <button type='button'
                    className='dropdown-item'
                    onClick={() => {
                      mangKhoaHoc.sort(sapXepAZ);
                      setMangkhoaHocNew({
                        mangkhoaHocNew: mangKhoaHoc
                      });
                    }}
                  >
                    A-Z
                  </button>
                  <button type='button'
                    className='dropdown-item'
                    onClick={() => {
                      mangKhoaHoc.sort(sapXepLuotXem);
                      setMangkhoaHocNew({
                        mangkhoaHocNew: mangKhoaHoc
                      })
                    }}
                  >
                    Lượt Xem
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='input-group  search-bar'>
            <Search className='rounded'
              placeholder="Tìm kiếm khoá học ... "
              size="large"
              enterButton={<SearchOutlined />}
              onSearch={onSearch}
            />
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='allCourse-body'>
        <div className='row'>
          <div className='col-2'>
            <div className='course-category'>
              <h4 className='title '>Danh mục khóa học</h4>
              <ul className='navbar-nav category-menu'>
                <ul className="nav nav-tabs " id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className={classNames('category-items', 'nav-link', 'active')}
                      onClick={() => {onSearch('')}}
                      data-toggle="tab"
                    > Tất cả khóa học </a>
                  </li>
                  {renderCategoryHTML()}
                </ul>
              </ul>
            </div>
          </div>
          <div className='col-10'>
            {<TableItemCourse mangKhoaHoc={value === false ? mangKhoaHoc : mangKHTheoDanhMuc}  courseOfUser={thongTinTK ? thongTinTK.chiTietKhoaHocGhiDanh : ''}/>}
          </div>
        </div>
        <div className='Related-Course'></div>
      </div>
    </section>
  )


}
