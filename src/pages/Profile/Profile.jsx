import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from 'antd';

import { Container } from '../../components/Container';
import { LanguageItem } from '../../components/LanguageItem';
import { SocialItem } from '../../components/SocialItem';

import styles from './Profile.module.scss';

const { Title } = Typography;

const Profile = () => {
  const profile = useSelector((state) => state.userReducer.user.data);

  return (
    <div className={styles.profile}>
      <div className={styles.profile__body}>
        <Title level={1}>Profile</Title>
        <Container header='City'>
          <div className={styles.profile__city}>
            <div className={styles.city__title}>{profile.city}</div>
          </div>
        </Container>
        <Container header='Languages'>
          {profile.languages.map((lang, index) => (
            <LanguageItem
              languageName={lang}
              key={lang}
              isDivider={profile.languages.length - 1 === index ? false : true}
            />
          ))}
        </Container>
        <Container header='Social'>
          {profile.social.map((media, index) => (
            <SocialItem
              key={media.label}
              label={media.label}
              link={media.link}
              isDivider={profile.social.length - 1 === index ? false : true}
            />
          ))}
        </Container>
      </div>
    </div>
  );
};

export { Profile };
