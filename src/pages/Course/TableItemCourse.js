import React, { Fragment, useEffect } from 'react';
// import { UncontrolledPopover, PopoverBody } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import ItemCourse from '../../components/Course/ItemCourse';
// import { useDispatch, useSelector } from 'react-redux';
// import { layDanhSachKhoaHocAction } from '../../redux/actions/QuanLyKhoaHocAction';
// import { layThongTinTaiKhoanAction } from '../../redux/actions/QuanLyNguoiDungAction';

export default function TableItemCourse(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let { mangKhoaHoc, courseOfUser } = props;
  const tempArray = () => {
    let pagenumber;
    pagenumber =
      mangKhoaHoc.length % 8 === 0
        ? Math.floor(mangKhoaHoc.length / 8)
        : Math.floor(mangKhoaHoc.length / 8) + 1;

    let tempArray = [];
    for (let i = 0; i < pagenumber; i++) {
      tempArray.push(i);
    }
    return tempArray;
  };

  const renderPageNumber = (tempArray) => {
    return tempArray.map((item, index) => {
      return (
        <li key={index} className="nav-item">
          <a
            className={classnames('nav-link', {
              active: index === 0,
            })}
            data-toggle="tab"
            href={`#menu${index}`}
          >
            {item}
          </a>
        </li>
      );
    });
  };

  const renderTableCourse = (tempArray) => {
    return tempArray.map((item, index) => {
      return (
        <div
          key={index}
          className={classnames('tab-pane fade', {
            show: index === 0,
            active: index === 0,
          })}
          id={'menu' + index}
        >
          <div className="row">
            {mangKhoaHoc.slice(index * 8, index * 8 + 8).map((item, i) => {
              return (
                <div className="col-3 " key={i}>
                  <ItemCourse
                    course={item}
                    id={index * 10 + i}
                    courseOfUser={courseOfUser ? courseOfUser : ''}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <Fragment>
      <div className="tab-content" id="myTabContent">
        {renderTableCourse(tempArray())}
      </div>

      <div className="adjust-center-pagesize">
        <ul className="nav nav-tabs " id="myTab" role="tablist">
          {renderPageNumber(tempArray())}
        </ul>
      </div>
    </Fragment>
  );
}
