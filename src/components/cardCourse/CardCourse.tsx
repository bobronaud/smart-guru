import LikeSvg from '@/assets/icons/like.svg';
import { CardData } from '@/types/course';
import { useState } from 'react';
import Place from '../ui/place/Place';
import Raiting from '../ui/raiting/Raiting';
import styles from './CardCourse.module.scss';

interface CardCourseProps {
	data: CardData;
}

const CardCourse = ({ data }: CardCourseProps) => {
	const {
		organization,
		name,
		organizationImg,
		direction,
		description,
		img,
		price,
		duration,
		placesLeft,
		status,
		raiting,
	} = data;
	const [isLiked, setLike] = useState(false);
	const handleClick = () => {
		setLike(!isLiked);
	};
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h3 className={styles.title}>{name}</h3>
				<LikeSvg
					className={isLiked ? styles.active : null}
					onClick={handleClick}
				/>
			</div>
			<div className={styles.subtitle}>
				<img
					src={organizationImg}
					alt='Логотип организации'
				/>
				<div className={styles.orgInfo}>
					<h5 className={styles.orgName}>{organization}</h5>
					<h6 className={styles.direction}>{direction}</h6>
				</div>
			</div>
			<p className={styles.description}>{description}</p>
			<img
				className={styles.courseImg}
				src={img}
				alt='Изображение обложки курса'
			/>
			<div className={styles.info}>
				<div>
					<p>Рейтинг:</p>
					<Raiting score={raiting} />
				</div>
				<div className={styles.cost}>
					<p>Стоимость:</p>
					<p>{price}</p>
				</div>
				<div>
					<p>Длительность:</p>
					<p>{duration}</p>
				</div>
				<div>
					<Place type={status} />
					<p>Мест осталось: {placesLeft}</p>
				</div>
			</div>
		</div>
	);
};

export default CardCourse;
