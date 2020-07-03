import React, { Fragment } from "react";

import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.2.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.jsx";
import Login from "components/Auth/login/Login";
import Register from "components/Auth/register/Register";
import Alert from "layouts/alert/Alert"

//Redux
import { Provider } from "react-redux";
import store from "redux/store";
import { useEffect } from "react";
import { authUser } from "redux/actions/authActions";
import setAuthToken from "utils/setAuthToken";
//import { authUser } from "redux/actions/authActions";
//import setAuthToken from "utils/setAuthToken";


const hist = createBrowserHistory();
// We want to check if there's a token. If there is, we will put it in a global header (x-auth-token)
if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

const App = () => {

    useEffect(() => {
        store.dispatch(authUser())
      }, [])

      
    return (
        //We wrap everythink inside the provider so any component can access our app level state 
        <Provider store={store}>
            <Router history={hist}>
                <Fragment>
                <Alert/>
                    <Switch>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/login" component={Login}/>
                        <Route path="/admin" render={props => <AdminLayout {...props} />} />
                        <Redirect to="/admin/dashboard" />
                    </Switch>
                </Fragment>
            </Router>
        </Provider>
    )
}

export default App;