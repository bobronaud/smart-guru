import React, { useState } from 'react';
import styles from './Dropdown.module.scss';

//пользовательский тип, чтобы потом типизировать массив с опциями
//с помощью value будет отправлять ответ на сервер, label наша подпись к опции
export type option = { value: string | number; label: string };

//общий интерфейс для нашего функционального компонента
interface DropdownProps {
	label: string;
	options: option[];
}

export const Dropdown: React.FC<DropdownProps> = ({ label, options }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleClose = () => {
		setIsOpen(false); // Закрываем список при выборе опции
	};

	return (
		<div
			className={`${styles.dropdown_container} ${isOpen ? styles.open : ''}`}
			onClick={toggleDropdown}
			role='button'
		>
			<div className={styles.label_container}>
				<p className={styles.dropdown_label}>{label}</p>
				<div>
					<svg
						className={`${styles.arrow_button} ${isOpen ? styles.open : ''}`}
						width='10'
						height='6'
						viewBox='0 0 10 6'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M9 1L5.70711 4.29289C5.31658 4.68342 4.68342 4.68342 4.29289 4.29289L1 1'
							stroke='#9EA5AD'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
			</div>
			{isOpen && (
				<ul
					className={`${styles.dropdown_options} ${isOpen ? styles.open : ''}`}
					onClick={e => e.stopPropagation()} // Останавливаем распространение клика, чтобы не закрывался список
				>
					{options.map((option, index) => (
						<li
							key={index}
							value={option.value}
							className={styles.dropdown_option}
							onClick={handleClose}
						>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
