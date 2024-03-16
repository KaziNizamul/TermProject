import React from 'react';
import styles from './index.module.scss';

const TextArea = ({ label, ...props }) => {
  return (
    <div className={styles['form-group']}>
      {label && <label className={styles.label}>{label}</label>}
      <textarea className={styles['form-control']} {...props} />
    </div>
  );
};

export default TextArea;