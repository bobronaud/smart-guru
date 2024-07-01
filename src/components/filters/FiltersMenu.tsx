import { Dropdown, option } from './Dropdown/Dropdown';
import styles from './FiltersMenu.module.scss';

export const FiltersMenu = () => {
	const options1: option[] = [
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
	];
	const options2: option[] = [
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
	];
	const options3: option[] = [
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
	];
	const options4: option[] = [
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
	];
	return (
		<div className={styles.menu_container}>
			<Dropdown
				label='Длительность'
				options={options1}
			></Dropdown>
			<Dropdown
				label='Длительность'
				options={options2}
			></Dropdown>
			<Dropdown
				label='Длительность'
				options={options4}
			></Dropdown>
			<Dropdown
				label='Длительность'
				options={options3}
			></Dropdown>
		</div>
	);
};
