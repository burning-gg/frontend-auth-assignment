import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './SocialItem.module.scss';

import { Divider } from 'antd';

const SocialItem = ({ label, link, isDivider }) => {
  return (
    <Fragment>
      <div className={styles.socialItem}>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.socialItem__link}
        >
          {label === 'web' ? (
            <i className={`fas fa-globe fa-2x`} />
          ) : (
            <i className={`fab fa-${label} fa-2x`} />
          )}
        </a>
        <div className={styles.socialItem__body}>{label}</div>
      </div>
      {isDivider && <Divider />}
    </Fragment>
  );
};

SocialItem.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isDivider: PropTypes.bool.isRequired,
};

export { SocialItem };
