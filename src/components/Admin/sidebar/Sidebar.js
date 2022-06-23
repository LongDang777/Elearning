import React from 'react'
import sidebarData from '../../../assets/JsonData/sidebar_routes.json'
import {  NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { LogoutAction } from '../../../redux/actions/LogoutAction';
import { history } from '../../../App';



export default function Sidebar(props) {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(LogoutAction())
    history.push('/')
  }

  
  const SidebarItem = props => {
    const active = props.active ? 'active' : ''
    return (
      <div className='sidebar__item'>
        <div className={`sidebar__item-inner ${active}`}>
          <i className={props.icon}></i>
          <h3>{props.title}</h3>
        </div>
      </div>
    )
  }
  

  const activeItem = sidebarData.findIndex(item => item.route === props.path)

  

  return (
    <div className='sidebar'>
      {sidebarData.map((item, index) => (
        <NavLink to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={index === activeItem}
          />
        </NavLink>
      ))}
      <button className='sidebar__item' onClick={handleLogout}>
        <div className={'sidebar__item-inner'}>
          <i className='bx bx-log-out-circle'></i>
          <h3>Logout</h3>
        </div>
      </button>
    </div>
  )
}
