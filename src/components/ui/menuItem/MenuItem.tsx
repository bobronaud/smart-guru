import { ButtonHTMLAttributes } from 'react';
import styles from './MenuItem.module.scss';
import cn from 'classnames';

interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	active?: boolean;
}

const MenuItem = ({ children, active }: MenuItemProps) => {
	const classes = cn(styles.menuItem, active && styles.active);
	// const handleClick = () => {};
	return (
		<button
			className={classes}
			// onClick={handleClick}
		>
			<div className={styles.children}>{children}</div>
		</button>
	);
};

export default MenuItem;
