import React from 'react';
import styles from './styles.module.css';

const Loading = () => {
  return (
    // <div className="text-light" style={{display: 'flex', justifyContent: 'center', alignSelf: 'center'}}>Loading</div>
    <div className={styles.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
  )
};

export default Loading;