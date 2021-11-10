import React from 'react';
import { Layout } from 'antd';

import styles from './Footer.module.scss';

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer className={styles.footer}>
      <div className={styles.footer__body}>Yamata test assignment. 2021.</div>
    </Footer>
  );
};

export { CustomFooter };
