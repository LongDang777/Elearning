import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Login from '../Form/Login';
import { Modal } from 'antd';
import Register from '../Form/Register';
import styled from 'styled-components';
import LogOut from '../Form/Logout';
import Cart from './Cart';

export default function Header(props) {
  const dispatch = useDispatch();
  const { Component, isVisible } = useSelector((state) => state.ModalReducer);
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const [title, setTitle] = useState('');

  const handleCancel = () => {
    dispatch({
      type: 'CLOSE_MODAL',
      isVisible: false,
    });
  };

  const showLogin = () => {
    setTitle('Login');
    dispatch({
      type: 'OPEN_MODAL',
      Component: <Login />,
      isVisible: true,
    });
  };

  const showRegister = () => {
    setTitle('Register');
    dispatch({
      type: 'OPEN_MODAL',
      Component: <Register />,
      isVisible: true,
    });
  };

  // const goTop = () => {
  //   window.scroll({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // };
  return (
    <HeaderWrapper className="navbar-light bg-light">
      <nav className="wrapper-container navbar navbar-expand-sm">
        <NavLink className="navbar-brand" to="/">
          Elearning
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/allcourse">
                COURSE
              </NavLink>
            </li>
          </ul>
          <div className="navbar-right ml-auto my-2 my-lg-0">
            {!!userLogin.taiKhoan ? (
              <div className="d-flex align-items-center">
                <LogOut />
                <Cart />
              </div>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={showLogin}
                >
                  Log in
                </button>

                <button
                  className="btn btn-outline-success my-2 my-sm-0 ml-2"
                  onClick={showRegister}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
      <ModalWrapper
        title={title}
        visible={isVisible}
        onCancel={handleCancel}
        footer={null}
        style={{ top: '50px' }}
      >
        {Component}
      </ModalWrapper>
    </HeaderWrapper>
  );
}

const ModalWrapper = styled(Modal)`
  .ant-modal {
    top: 50px !important;
  }
`;

const HeaderWrapper = styled.header`
  width: 100%;
  padding: 10px 0;

  .wrapper-container {
    width: 90%;
    margin: auto;
  }

  .logo-img {
  }

  .navbar-brand {
    font-size: 24px;
    font-weight: 700;
    color: #3498db;
  }

  .ml-10 {
    margin-left: 10px;
  }

  .anticon-shopping-cart {
    font-size: 28px;
    cursor: pointer;
  }
`;
