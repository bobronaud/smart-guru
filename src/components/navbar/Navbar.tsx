import { useState } from 'react';
import styles from './Navbar.module.scss';

import MenuItem from '../ui/menuItem/MenuItem';

import CatalogSvg from '@/assets/icons/catalog.svg';
import CertifitacesSvg from '@/assets/icons/certifitaces.svg';
import RecordsSvg from '@/assets/icons/records.svg';
import ReviewsSvg from '@/assets/icons/reviews.svg';
import SettingsSvg from '@/assets/icons/settings.svg';
import SignOutSvg from '@/assets/icons/signOut.svg';
import LogoDesktop from '@/assets/logos/logoDesktop.svg';

const Navbar = () => {
	const [active, setActive] = useState('Каталог');
	const navButtons = [
		{
			name: 'Каталог',
			svg: <CatalogSvg />,
		},
		{
			name: 'Записи',
			svg: <RecordsSvg />,
		},
		{
			name: 'Сертификаты',
			svg: <CertifitacesSvg />,
		},
		{
			name: 'Отзывы',
			svg: <ReviewsSvg />,
		},
	];

	return (
		<div className={styles.container}>
			<div>
				<LogoDesktop className={styles.logo} />
				<nav>
					<ul className={styles.menuNav}>
						{navButtons.map(({ name, svg }) => (
							<li
								className={styles.menuItem}
								key={name}
							>
								<MenuItem
									onClick={() => setActive(name)}
									active={active === name}
								>
									{svg}
									<p className={styles.buttonText}>{name}</p>
								</MenuItem>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<nav className={styles.menuExit}>
				<div>
					<MenuItem
						onClick={() => setActive('Настройки')}
						active={active === 'Настройки'}
					>
						<SettingsSvg />
						<p>Настройки</p>
					</MenuItem>

					<MenuItem
						onClick={() => setActive('Выход')}
						active={active === 'Выход'}
					>
						<SignOutSvg />
						<p>Выход</p>
					</MenuItem>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
