import { useState } from 'react';
import styles from './Navbar.module.scss';

import useWindowWidth from '@/hooks/useWindowWidth';
import MenuItem from '../ui/menuItem/MenuItem';

import CatalogSvg from '@/assets/icons/catalog.svg';
import CertifitacesSvg from '@/assets/icons/certifitaces.svg';
import RecordsSvg from '@/assets/icons/records.svg';
import ReviewsSvg from '@/assets/icons/reviews.svg';
import SettingsSvg from '@/assets/icons/settings.svg';
import SignOutSvg from '@/assets/icons/signOut.svg';
import LogoDesktop from '@/assets/logos/logoDesktop.svg';

const Navbar = () => {
	const width = useWindowWidth();
	const isDesktop = width >= 1000;

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
			<div className={styles.navMenu}>
				{isDesktop && <LogoDesktop className={styles.logo} />}
				<nav>
					<ul>
						{navButtons.map(({ name, svg }) => (
							<li key={name}>
								<MenuItem
									onClick={() => setActive(name)}
									active={active === name}
								>
									{svg}
									<p>{name}</p>
								</MenuItem>
							</li>
						))}
					</ul>
				</nav>
			</div>
			{isDesktop && (
				<div className={styles.bottomMenu}>
					<nav>
						<ul>
							<li>
								<MenuItem
									onClick={() => setActive('Настройки')}
									active={active === 'Настройки'}
								>
									<SettingsSvg />
									<p>Настройки</p>
								</MenuItem>
							</li>
							<li>
								<MenuItem
									onClick={() => setActive('Выход')}
									active={active === 'Выход'}
								>
									<SignOutSvg />
									<p>Выход</p>
								</MenuItem>
							</li>
						</ul>
					</nav>
				</div>
			)}
		</div>
	);
};

export default Navbar;
