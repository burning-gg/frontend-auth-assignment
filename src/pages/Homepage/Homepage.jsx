import React from 'react';
import { Typography } from 'antd';

import styles from './Homepage.module.scss';

const { Title } = Typography;

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Title level={1} className={styles.homepage__body}>
        This is a homepage
      </Title>
    </div>
  );
};

export { Homepage };
