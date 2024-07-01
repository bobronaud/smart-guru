import cn from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import styles from './MenuItem.module.scss';

interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	active?: boolean;
}

const MenuItem = ({ children, active, ...restProps }: MenuItemProps) => {
	const classes = cn(styles.menuItem, active && styles.active);
	return (
		<button
			className={classes}
			{...restProps}
		>
			<div className={styles.children}>{children}</div>
		</button>
	);
};

export default MenuItem;
