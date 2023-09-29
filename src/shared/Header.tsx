import React from 'react';
import { hot } from 'react-hot-loader/root';
import styles from './header.css';

const Header = () => {
  return (
    <header>
      <h1 className={styles.example}>hello React</h1>
    </header>
  );
};

export default Header;