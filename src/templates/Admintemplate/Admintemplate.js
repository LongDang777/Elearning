import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'


export const Admintemplate =(props)=> {
  return (
    <Route exact path={props.path}
      render={propsRoute => {
        return (
          <Fragment>
            {/* <Header /> */}
            admin
            <props.component {...propsRoute} />

            {/* <Footer /> */}
          </Fragment>
        );
      }}
    />
  )
}
