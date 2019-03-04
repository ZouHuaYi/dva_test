import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Example from '../components/Example'


function IndexPage({dispatch,example}) {
  function clickAdd() {
    dispatch({
      type:'example/add'
    })
  }
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <Example num={example} clickAdd={clickAdd} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({example})=>({example}))(IndexPage);
