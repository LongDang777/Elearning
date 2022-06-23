import { message } from 'antd'
import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import logo from '../../assets/img/logo.jpg'
import photoUser from '../../assets/img/user-image.png'
import Sidebar from '../../components/Admin/sidebar/Sidebar'

export const Admintemplate = (props) => {

  const LOGIN_USER = JSON.parse(localStorage.getItem("LOGIN_USER"));

  

  return (
    <Route exact path={props.path} render={propsRoute => {
      return (
        <div className='w-100'>
          <div className="adminStyle">
            <aside>
              <div className="top">
                <NavLink to='/admin' className="logo">
                  <img src={logo} alt="" />
                  <h2 className='blue'>LEARNING</h2>
                </NavLink>
                <div className="top__close" id='close-btn' onClick={() => {
                  document.querySelector("aside").style = "display: none"
                }} >
                  <span className="material-icons-sharp">close</span>
                </div>
              </div>
              <Sidebar />
            </aside>
            <div className='main'>
              <div className="top__right">
                <button id='menu-btn' onClick={() => {
                  document.querySelector("aside").style = "display: block"
                }}>
                  <span className='material-icons-sharp'>menu</span>
                </button>
                <div className="theme-toggle" onClick={() => {
                  document.body.classList.toggle('dark-theme-variables')

                }}>
                  <span className='material-icons-sharp active'>light_mode</span>
                  <span className='material-icons-sharp'>dark_mode</span>
                </div>
                <div className="profile">
                  <div className="info">
                    <p>Hey, <b>{LOGIN_USER.taiKhoan}</b></p>
                    <small className='text-muted'>Admin</small>
                  </div>
                  <div className="profile-photo">
                    <img src={photoUser} />
                  </div>
                </div>
              </div>
              <main>
                <props.component {...propsRoute} />
              </main>
            </div>   
          </div>
        </div>

      );
    }}
    />
  )
}