import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import { BackTop } from 'antd';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ArrowUpOutlined } from '@ant-design/icons';

export const HomeTemplate = (props) => {
  const toTopStyle = {
    height: 40,
    width: 40,
    lineHeight: '30px',
    borderRadius: '50%',
    backgroundColor: '#00BCD4',
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  };
  return (
    <Route exact path={props.path} render={propsRoute => {
      return (
        <Fragment>
          <Header />
          <props.component {...propsRoute} />
          <Footer />
          <BackTop>
            <div style={toTopStyle}><ArrowUpOutlined /></div>
          </BackTop>
        </Fragment>
      );
    }}
    />
  )
}



