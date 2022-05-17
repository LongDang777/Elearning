import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import Login from '../FormLogin/Login';



export default function Header(props) {

  const goTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <header className=''>
      <nav className="container navbar navbar-expand-sm navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">Elearning</NavLink>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">HOME</NavLink>
            </li><li className="nav-item">
              <NavLink className="nav-link" to="/">COURSE</NavLink>
            </li>
          </ul>
          <div className="navbar-right ml-auto my-2 my-lg-0" >
           
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
            LOG IN {<Login />}
            </button>


            <button className="btn btn-outline-success my-2 my-sm-0 ml-2">
              LOG OUT
            </button>

          </div>
        </div>
      </nav>

    </header>
  )
}


