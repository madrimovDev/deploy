import React, { useContext } from 'react'
import { Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = (data) => {
        login(data.username, data.password)
        navigate('/')
    }
    return (
        <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
            <Form onFinish={onSubmit} style={{ width: 300 }} layout='vertical'>
                <Form.Item
                    label='Username'
                    name='username'
                    rules={[
                        {
                            required: true,
                            min: 4
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Password'
                    name='password'
                    rules={[
                        {
                            required: true,
                            min: 4
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Button style={{ width: '100%' }} htmlType='submit' type='primary'>Login</Button>
                <Link to='/register'>Sign Up</Link>
            </Form>
        </div>
    )
}

export default Login