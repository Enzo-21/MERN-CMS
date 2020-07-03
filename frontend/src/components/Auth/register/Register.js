import React, { useState, Fragment, useEffect } from "react";
import { Form, Input, Checkbox, Row, Col } from "antd"; //TODO: IMPORT notification also
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link, Redirect } from 'react-router-dom'
import './register.scss'
//Redux
import { connect } from "react-redux";
import { setAlert } from "../../../redux/actions/alertAction"; // We have to pass this as parameter to connect() at the very bottom
import { register } from "../../../redux/actions/authActions"; // We have to pass this as parameter to connect() at the very bottom
import PropTypes from 'prop-types'


const Register = ({ setAlert, register, errors, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { name, email, password, confirmPassword } = formData

    const onChangeInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmitForm = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {

            setAlert('Las contraseñas no coinciden', null, 'error')



        } else {
            await register({ name, email, password })
        }





    }

    //If register was not successfull:
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


    //If register was successfull:
    if (isAuthenticated) {
        return <Redirect to='/me' />
    }



    return (

        <Fragment>


            <Form
                name="registerForm"
                className="register-form p-1 mt-2 rounded"
                onSubmitCapture={e => onSubmitForm(e)}
            >
                <h1>Registrarse</h1>
                <Row gutter={[18, 0]}>
                    <Col xs={24} md={12}>
                        <Form.Item>
                            <Input className='rounded'
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                name="name"
                                value={name}
                                onChange={e => onChangeInput(e)}
                                placeholder="Username" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item>
                            <Input className='rounded'
                                prefix={<MailOutlined className="site-form-item-icon" />}
                                name="email"
                                value={email}
                                onChange={e => onChangeInput(e)}
                                type="email"
                                placeholder="Email" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[18, 0]}>
                    <Col xs={24} md={12}>
                        <Form.Item>
                            <Input.Password className='rounded'
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                name="password"
                                value={password}
                                onChange={e => onChangeInput(e)}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item>
                            <Input.Password className='rounded'
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={e => onChangeInput(e)}
                                type="password"
                                placeholder="Repite tu contraseña"
                            />
                        </Form.Item>
                    </Col>

                </Row>

                <Form.Item className='remember'>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Recordarme</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item className='mb-0'>
                    <button className='btn btn-primary btn-rounded d-block' type="submit">
                        Registrarse
                    </button>
                    <hr />
                    <span>Ya tienes cuenta?</span>  <Link to="/login" className='primary'>Iniciar sesión</Link>
                </Form.Item>
            </Form>
        </Fragment>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.array,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
    errors: state.authReducer.errors,
    isAuthenticated: state.authReducer.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register) //This will return setAlert in props. So we can get it through props.setAlert
// Connect takes in two things
    // 1: Any state we want to map (usually called mapStateToProps)
    // 2: An object with any action/s we want to use