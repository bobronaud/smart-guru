import Bell from '@/components/ui/bell/Bell';
import classes from './TopBar.module.scss';
import useWindowWidth from '@/hooks/useWindowWidth';
import HeartSVG from '@/assets/icons/heart.svg';
import BigLogoSVG from '@/assets/icons/biglogo.svg';
import SmallLogoSVG from '@/assets/icons/smalllogo.svg';

const TopBar = () => {
	const dispWidth = useWindowWidth();
	const bigWidth = dispWidth <= 1000 && dispWidth > 600;
	const smallWidth = dispWidth <= 600;

	return (
		<section className={classes.topBar}>
			{bigWidth && (
				<div>
					<BigLogoSVG className={classes.bigLogo} />
				</div>
			)}
			{smallWidth && (
				<div>
					<SmallLogoSVG className={classes.smallLogo} />
				</div>
			)}
			<div className={classes.box}>
				<div className={classes.btnBox}>
					<button className={classes.favBtn}>
						<HeartSVG />
					</button>
					<Bell />
				</div>
				<div className={classes.profBox}>
					{!smallWidth && (
						<div className={classes.nameBox}>
							<p className={classes.user}>Пользователь</p>
							<p className={classes.userName}>Семечки Джинн</p>
						</div>
					)}
					<div className={classes.photoBox}>
						<img
							className={classes.photo}
							src='https://main-cdn.sbermegamarket.ru/hlr-system/-37/138/702/172/917/56/100028794497b0.png'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TopBar;
