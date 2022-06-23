import React from 'react';
import { useDispatch } from 'react-redux';
import { Space, Row, Col, Button } from 'antd';
import styled from 'styled-components';
import { dangKyKhoaHoc, xoaGioHangAction } from '../../redux/actions/QuanLyKhoaHocAction';

export default function CartItem({ item, isMyCourse }) {
  const dispatch = useDispatch();

  const TkLogin = JSON.parse(localStorage.getItem('LOGIN_USER'))

  const handleRegisterCourse = (data) => {
    dispatch(dangKyKhoaHoc(data));
  };

  return (
    <CartItemWrapper className="cart-item">
      <Space>
        <img src={item.hinhAnh} alt="" />
        <Row gutter={10}>
          {isMyCourse ? (
            <>
              <Col sm={16} xs={14}>
                <div className="item-name">{`${item.tenKhoaHoc}`}</div>
                <div className="item-views">{`Lượt xem: ${item.luotXem} views`}</div>
              </Col>
              <Col sm={8} xs={10} className="isMyCourse">
                <Button type="primary" onClick={() => {
                  const data = {
                    maKhoaHoc: item.maKhoaHoc,
                    taiKhoan: TkLogin.taiKhoan,
                  };
                  handleRegisterCourse(data);
                }}>Đăng Ký</Button>
                <Button
                  type="primary"
                  danger
                  onClick={() => {
                    const action = xoaGioHangAction(item);
                    dispatch(action);
                  }}
                >
                  Xóa
                </Button>
              </Col>
            </>
          ) : (
            <>
              <Col sm={16} xs={18}>
                <div className="item-name">{`${item.tenKhoaHoc}`}</div>
                <div className="item-views">{`Lượt xem: ${item.luotXem} views`}</div>
              </Col>
              <Col sm={8} xs={6}>
                <Button type="primary" onClick={() => {
                  const data = {
                    maKhoaHoc: item.maKhoaHoc,
                    taiKhoan: TkLogin.taiKhoan,
                  };
                  handleRegisterCourse(data);
                }}>Đăng Ký</Button>
                <Button
                  type="primary"
                  danger
                  onClick={() => {
                    const action = xoaGioHangAction(item);
                    dispatch(action);
                  }}
                >
                  Xóa
                </Button>
              </Col>
            </>
          )}
        </Row>
      </Space>
    </CartItemWrapper>
  );
}

const CartItemWrapper = styled.div`
  margin-bottom: 10px;
  cursor: pointer;

  .ant-space {
    width: 100%;
    .ant-space-item:last-child {
      width: 100%;
      height: 100%;
    }
  }

  .ant-btn {
    border-radius: 4px;
    min-width: 100px;
  }

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 5px;
  }

  .ant-row {
    align-items: center;

    .item-name {
      font-weight: 700;
      font-size: 16px;
      margin-bottom: 5px;
    }
  }
  .ant-col:last-child {
    display: flex;
    flex-direction: column;
    gap: 5px;

    &.isMyCourse {
      flex-direction: row;

      .ant-btn {
        min-width: auto;
      }
    }
  }

  @media (max-width: 576px) { 
    .ant-col:last-child {
      &.isMyCourse {
        flex-direction: column;
  
        .ant-btn {
          min-width: unset;
          padding: 4px 15px;
        }
      }
  }
`;
