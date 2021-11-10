import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CustomHeader } from './components/Header';
import { Homepage } from './pages/Homepage';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { NotFound } from './pages/NotFound';
import { CustomFooter } from './components/Footer';
import { RequireAuth } from './components/RequireAuth';
import { Notification } from './components/Notification';
import { Loader } from './components/Loader';

import 'antd/dist/antd.css';
import styles from './App.module.scss';

import { Layout } from 'antd';

import { loadUser } from './actions/userAction';
import { isAuth } from './actions/authAction';

import setAuthToken from './utils/setAuthToken';

if (sessionStorage.token) {
  setAuthToken(sessionStorage.token);
}

const { Content } = Layout;

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer);
  const auth = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(loadUser());
    dispatch(isAuth());
  }, [dispatch]);

  return (
    <Router>
      <Layout>
        <CustomHeader />
        {auth.loading || user.loading ? (
          <Loader />
        ) : (
          <Content className={styles.wrapper}>
            <Notification />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='login' element={<Login />} />
              <Route
                path='profile'
                element={
                  <RequireAuth>
                    <Profile />
                  </RequireAuth>
                }
              />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Content>
        )}
        <CustomFooter />
      </Layout>
    </Router>
  );
};

export default App;
