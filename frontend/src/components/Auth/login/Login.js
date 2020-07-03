import React, { Fragment, useState, useEffect } from 'react'
import { Form, Input, Checkbox, Row, Col } from "antd"; //TODO: IMPORT notification also
import './login.scss';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link, Redirect } from 'react-router-dom'

//Redux
import { connect } from "react-redux";
import { setAlert } from "../../../redux/actions/alertAction"; // We have to pass this as parameter to connect() at the very bottom
import { login } from "../../../redux/actions/authActions"; // We have to pass this as parameter to connect() at the very bottom
import PropTypes from 'prop-types'

const Login = ({ setAlert, login, errors, isAuthenticated }) => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const onChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()   
    await login({email, password})
  }

  //If login was not successfull:
  useEffect(() => {
    if (errors) {
      errors.forEach(error => {
        // console.log(error);
        setTimeout(() => {
          setAlert(error.msg, null, 'error')
        }, 2)   // I had to do this because otherwise this got excecuted multiple times and we got the same alert a lot of times. I think its a problem with redux excecution.
      })
    }
  }, [errors, setAlert])

  //If login was successfull:
  if (isAuthenticated) {
    return <Redirect to='/me'/>
  }

  return (

    <Fragment>


      <Form
        name="normal_login"
        className="login-form p-1 mt-2 rounded"
        onSubmitCapture={e => onSubmitForm(e)}
      >

        <h1>Login</h1>
        <Row gutter={[18, 0]}>
          <Col xs={24} md={12}>
            <Form.Item>
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                name="email"
                value={email}
                onChange={e => onChangeInput(e)}
                type="email"
                placeholder="Email" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item>
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                name="password"
                value={password}
                onChange={e => onChangeInput(e)}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
          </Col>

        </Row>

        <Form.Item className='remember' >
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Recordarme</Checkbox>
          </Form.Item>

          <a className="login-form-forgot primary" href="/forgot">
            Olvidé mi contraseña
        </a>
        </Form.Item>

        <Form.Item className='mb-0'>
          <button className='btn btn-primary btn-rounded d-block' type="submit">
            Ingresar
                    </button>
          <hr />
          <span> No tienes cuenta aún?</span> <Link to="/register" className='primary'>Registrarse</Link>
        </Form.Item>
      </Form>
    </Fragment >
  )
}

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  errors: PropTypes.array,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
  errors: state.authReducer.errors,
  isAuthenticated: state.authReducer.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, login })(Login)
