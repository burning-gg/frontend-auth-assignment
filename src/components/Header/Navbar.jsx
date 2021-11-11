import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Navbar.module.scss';

import { logout } from '../../actions/authAction';
import { clearUser } from '../../actions/userAction';

const Navbar = ({ isMobile }) => {
  const auth = useSelector((state) => state.authReducer);
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(clearUser());
    navigate('/');
  };

  const styleNavbar = isMobile ? styles.navbar_mobile : styles.navbar;
  const styleNavbarLink = isMobile
    ? styles.navbar__link_mobile
    : styles.navbar__link;

  return (
    <Fragment>
      {!auth.loading && (
        <ul className={styleNavbar}>
          {auth.isAuthenticated ? (
            <Fragment>
              <li>
                <Link to='/' className={styleNavbarLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/profile' className={styleNavbarLink}>
                  Profile
                </Link>
              </li>
              <li>
                <a onClick={(e) => onLogout(e)} href='/'>
                  <i className='fas fa-sign-out-alt'></i>{' '}
                  <span className={styleNavbarLink}>Logout</span>
                </a>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li>
                <Link to='/' className={styleNavbarLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/login' className={styleNavbarLink}>
                  Sign In
                </Link>
              </li>
            </Fragment>
          )}
        </ul>
      )}
    </Fragment>
  );
};

Navbar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export { Navbar };
