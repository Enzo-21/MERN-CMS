import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, authReducer: { isAuthenticated, loading }, ...rest }) => (
    // This is a component that checks if the user is not authenticated (or loading)
    <Route {...rest} render={props => !isAuthenticated && !loading ? (
        <Redirect to='/login' />
    ) : (<Component {...props} />)} />
)

PrivateRoute.propTypes = {
    authReducer: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    authReducer: state.authReducer
})

export default connect(mapStateToProps)(PrivateRoute)
