import React, { useState, useEffect } from "react";

import PerfectScrollbar from "perfect-scrollbar";


import { Route, Switch, Redirect } from "react-router-dom";


import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
//import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";

import routes from "routes.js";
import { createRef } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types'

var ps;



const Dashboard = (props) => {

  const { isAuthenticated, loading } = props
  const [backgroundColor] = useState('blue')
  const mainPanel = createRef();

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }

    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }

  }, [])


  if (!isAuthenticated && !loading) {
   return <Redirect to='/login' />
  } else {
    return (
      <div className="wrapper">
        <Sidebar
          {...props}
          routes={routes}
          backgroundColor={backgroundColor}
        />
        <div className="main-panel" ref={mainPanel}>
          <DemoNavbar {...props} />
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <Footer fluid />
        </div>
        {/* <FixedPlugin
          bgColor={backgroundColor}
        /> */}
      </div>
    );
  }





}

Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  loading: state.authReducer.loading
})

export default connect(mapStateToProps)(Dashboard);
