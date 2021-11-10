import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './LanguageItem.module.scss';

import { Divider } from 'antd';

const LanguageItem = ({ languageName, isDivider }) => {
  return (
    <Fragment>
      <div className={styles.languageItem}>
        <div className={styles.languageItem__body}>{languageName}</div>
      </div>
      {isDivider && <Divider />}
    </Fragment>
  );
};

LanguageItem.propTypes = {
  languageName: PropTypes.string.isRequired,
  isDivider: PropTypes.bool.isRequired,
};

export { LanguageItem };
