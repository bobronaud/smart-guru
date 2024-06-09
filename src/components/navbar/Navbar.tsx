import styles from './Navbar.module.scss';
import MenuItem from '../ui/menuItem/MenuItem';

import LogoDesktop from '@/assets/logos/logoDesktop.svg';
import CatalogSvg from '@/assets/icons/catalog.svg';
import RecordsSvg from '@/assets/icons/records.svg';
import CertifitacesSvg from '@/assets/icons/certifitaces.svg';
import ReviewsSvg from '@/assets/icons/reviews.svg';
import SettingsSvg from '@/assets/icons/settings.svg';
import SignOutSvg from '@/assets/icons/signOut.svg';
import useWindowWidth from '@/hooks/useWindowWidth';

const Navbar = () => {
	const width = useWindowWidth();
	const isDesktop = width >= 1000;
	const notMobile = width >= 360;

	return (
		<div className={styles.container}>
			<div className={styles.navMenu}>
				{isDesktop && <LogoDesktop className={styles.logo} />}
				<nav>
					<ul>
						<li>
							<MenuItem active>
								<CatalogSvg />
								{notMobile && <p>Каталог</p>}
							</MenuItem>
						</li>
						<li>
							<MenuItem>
								<RecordsSvg />
								{notMobile && <p>Записи</p>}
							</MenuItem>
						</li>
						<li>
							<MenuItem>
								<CertifitacesSvg />
								{notMobile && <p>Сертификаты</p>}
							</MenuItem>
						</li>
						<li>
							<MenuItem>
								<ReviewsSvg />
								{notMobile && <p>Отзывы</p>}
							</MenuItem>
						</li>
					</ul>
				</nav>
			</div>
			{isDesktop && (
				<div className={styles.bottomMenu}>
					<nav>
						<ul>
							<li>
								<MenuItem>
									<SettingsSvg />
									<p>Настройки</p>
								</MenuItem>
							</li>
							<li>
								<MenuItem>
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
