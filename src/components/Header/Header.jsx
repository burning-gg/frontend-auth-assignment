import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from './Navbar';

import styles from './Header.module.scss';

import { Typography, Drawer, Button, Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Title } = Typography;

const CustomHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [visible, setVisible] = useState(false);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  }, [screenSize]);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <Header className={styles.header}>
      <Title level={2} className={styles.header__title}>
        <Link to='/' className={styles.title__link}>
          Yamata
        </Link>
      </Title>
      {mobileMenu && (
        <Button onClick={showDrawer}>
          <MenuOutlined />
        </Button>
      )}
      {mobileMenu ? (
        <Drawer
          title='Yamata'
          placement='right'
          onClose={onClose}
          visible={visible}
        >
          <Navbar isMobile={mobileMenu} />
        </Drawer>
      ) : (
        <Navbar isMobile={mobileMenu} />
      )}
    </Header>
  );
};

export { CustomHeader };
