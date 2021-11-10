import React from 'react';
import PropTypes from 'prop-types';

import styles from './Container.module.scss';

import { Typography, Divider } from 'antd';

const { Title } = Typography;

const Container = ({ header, children }) => {
  return (
    <div className={styles.container}>
      <Title level={2}>{header}</Title>
      <Divider />
      {children}
    </div>
  );
};

Container.propTypes = {
  header: PropTypes.string.isRequired,
};

export { Container };
