import React, { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Form, Input, Button } from 'antd';

import { Loader } from '../../components/Loader/Loader';

import styles from './Login.module.scss';

import { setAlert } from '../../actions/alertAction';
import { login } from '../../actions/authAction';

const { Title } = Typography;

const Login = () => {
  const [form] = Form.useForm();

  const auth = useSelector((state) => state.authReducer);
  let navigate = useNavigate();

  const dispatch = useDispatch();

  if (auth.isAuthenticated) {
    navigate('/profile');
  }

  const alerts = useSelector((state) => state.alertReducer);
  useEffect(() => {
    alerts.map((alert) =>
      alert.msg === 'Неверный email или пароль'
        ? form.setFieldsValue({
            password: '',
          })
        : ''
    );
  }, [alerts, form]);

  const onFinish = ({ email, password }) => {
    dispatch(login(email, password));
  };

  const onFinishFailed = (errorInfo) => {
    errorInfo.errorFields.map((error) => dispatch(setAlert(error, 'error')));
    form.setFieldsValue({
      password: '',
    });
  };

  const validateMessages = {
    required: '${label} - обязательное поле!',
    types: {
      email: '${label} некорректен!',
    },
  };

  return (
    <Fragment>
      {auth.loading ? (
        <Loader />
      ) : (
        <div className={styles.login}>
          <div className={styles.login__body}>
            <Title level={2}>Sign In</Title>
            <Form
              form={form}
              name='Login'
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
              validateMessages={validateMessages}
            >
              <Form.Item
                label='Email'
                name='email'
                rules={[
                  { type: 'email' },
                  {
                    required: true,
                    message: 'Email обязателен!',
                  },
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
                    message: 'Пароль обязателен!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  type='primary'
                  htmlType='submit'
                  className={styles.login__submit}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export { Login };
