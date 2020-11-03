import React from 'react';
import styles from './styles.module.css';

const Loading = () => {
  return (
    <div className={styles.centralizar}>
      {/* Carregando 1 */}
      {/* <div className={styles.lds_ellipsis}><div></div><div></div><div></div><div></div></div> */}
      {/* Carregando 2 */}
      <div className={styles.loadingio_spinner_interwind_5e1cuof46lv}><div className={styles.ldio_sj022abe5j}>
      <div><div><div><div></div></div></div><div><div><div></div></div></div></div>
      </div></div>
    </div>
  )
};

export default Loading;