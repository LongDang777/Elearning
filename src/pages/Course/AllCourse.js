import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { layDanhSachKhoaHocAction } from '../../redux/actions/QuanLyKhoaHocAction';
import TableItemCourse from './TableItemCourse';



export default function AllCourse(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(layDanhSachKhoaHocAction())
    // dispatch(layThongTinTaiKhoanAction()) // thieu auther
  }, [])

  const { mangKhoaHoc } = useSelector(state => state.QuanLyKhoaHocReducer)
  console.log(mangKhoaHoc);

  // const [tempCourseArray, setTempCourseArray ] = useState([])
  const [mangkhoaHocNew, setMangkhoaHocNew] = useState([])

  // compareAZ 
  const sapXepAZ = (a, b) => {
    const tenKhoaHocA = a.tenKhoaHoc.toUpperCase();
    const tenKhoaHocB = b.tenKhoaHoc.toUpperCase();
    // comparison
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
    // comparison
    let ketQua = 0;
    if (luotXemA > luotXemB) {
      ketQua = -1;
    } else if (luotXemA < luotXemB) {
      ketQua = 1;
    }
    return ketQua;
  };
  // soLuongHocVien
 
 
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
                  <a
                    className='dropdown-item'
                    onClick={() => {
                      mangKhoaHoc.sort(sapXepAZ);
                      setMangkhoaHocNew({
                        mangkhoaHocNew: mangKhoaHoc
                      });
                    }}
                  >
                    A-Z
                  </a>
                  <a
                    className='dropdown-item'
                    onClick={() => {
                      mangKhoaHoc.sort(sapXepLuotXem);
                      setMangkhoaHocNew({
                        mangkhoaHocNew: mangKhoaHoc
                      })
                    }}
                  >
                    Lượt Xem
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='input-group mb-3 search-bar'>
            <input
              type='text'
              className='form-control'
              placeholder='Tìm kiếm khóa học'
              aria-label="Recipient's username"
              aria-describedby='basic-addon2'
            // defaultValue={this.state.keyword}
            // onChange={(event) => {
            //   this.handleOnChange(event);
            // }}
            />
            <div className='input-group-append'>
              <span className='input-group-text' id='basic-addon2'>
                <i className='fa fa-search' aria-hidden='true'></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='allCourse-body'>
        <div className='row'>
          <div className='col-10'>
            {/* <TableItemCourse
                  listCourse={tempCourseArray}
                  courseOfUser={
                    accountInfo ? accountInfo.chiTietKhoaHocGhiDanh : ''
                  }
                /> */}
            {/* <props.component {...props.component}/> */}
            {<TableItemCourse mangKhoaHoc={mangKhoaHoc} />}
          </div>
          <div className='col-2'>
            <div className='course-category'>
              <h4 className='title '>Danh mục khóa học</h4>

              <ul className='navbar-nav category-menu'>
                {/* <CategoryCourse
                      listCategoryCourse={this.props.listCategoryCourse}
                      getCodeFromCategory={this.getCodeFromCategory}
                      positionActive={this.props.propsCompnent.match.params.id}
                    /> */}
              </ul>
            </div>
          </div>
        </div>
        <div className='Related-Course'></div>
      </div>
      {/* <CoursePopular /> */}
    </section>
  )


}
