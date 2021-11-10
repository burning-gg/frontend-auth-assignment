import React from 'react';
import { Typography } from 'antd';

import styles from './NotFound.module.scss';

const { Title } = Typography;

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <Title level={1} className={styles.notFound__body}>
        404. Not Found
      </Title>
    </div>
  );
};

export { NotFound };
