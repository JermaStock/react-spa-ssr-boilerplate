import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import styles from './header.less';

function HeaderComponent() {
	return (
		<header>
			<h1 className={styles.example}>hello React</h1>
		</header>
	);
}

export const Header = hot(HeaderComponent);