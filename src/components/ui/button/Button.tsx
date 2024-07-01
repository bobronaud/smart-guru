import { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outlined';
	size?: 'lg' | 'sm';
}
const Button = (props: ButtonProps) => {
	const { variant = 'primary', size = 'lg', children, disabled, ...restProps } = props;
	const classes = cn(styles.btn, styles[variant], styles[size], disabled && styles.disabled);

	return (
		<button
			{...restProps}
			className={classes}
			disabled={disabled}
		>
			<div className={styles.children}>{children}</div>
		</button>
	);
};

export default Button;
