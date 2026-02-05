import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.componentSet}>
      <div className={styles.component}>
        <div className={styles.tabs1}>
          <p className={styles.text}>标题一</p>
          <div className={styles.frame} />
        </div>
        <p className={styles.text2}>标题一</p>
        <p className={styles.text2}>标题一</p>
        <p className={styles.text2}>标题一</p>
        <p className={styles.text2}>标题一</p>
      </div>
      <div className={styles.component2}>
        <div className={styles.aTabs1}>
          <p className={styles.text}>标题一</p>
        </div>
        <div className={styles.aTabs2}>
          <p className={styles.text3}>标题一</p>
        </div>
        <div className={styles.aTabs2}>
          <p className={styles.text3}>标题一</p>
        </div>
        <div className={styles.aTabs2}>
          <p className={styles.text3}>标题一</p>
        </div>
        <div className={styles.aTabs2}>
          <p className={styles.text3}>标题一</p>
        </div>
      </div>
      <div className={styles.component3}>
        <div className={styles.tab1}>
          <p className={styles.text4}>标题一</p>
        </div>
        <div className={styles.tab2}>
          <p className={styles.text5}>标题一</p>
        </div>
        <div className={styles.tab2}>
          <p className={styles.text5}>标题一</p>
        </div>
        <div className={styles.tab2}>
          <p className={styles.text5}>标题一</p>
        </div>
        <div className={styles.tab2}>
          <p className={styles.text5}>标题一</p>
        </div>
      </div>
      <div className={styles.frame2}>
        <div className={styles.tab12}>
          <p className={styles.text3}>选项1</p>
        </div>
        <div className={styles.tab22}>
          <p className={styles.text3}>选项2</p>
        </div>
        <div className={styles.tab3}>
          <p className={styles.text3}>选项3</p>
        </div>
      </div>
    </div>
  );
}

export default Component;
