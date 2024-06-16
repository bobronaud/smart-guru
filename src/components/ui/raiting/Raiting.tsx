import EmptyStar from '@/assets/icons/emptyStar.svg';
import FillStar from '@/assets/icons/fillStar.svg';
import styles from './Raiting.module.scss';

type Props = {
	score: number;
};

const Raiting = ({ score }: Props) => {
	const scores = [1, 2, 3, 4, 5];
	return (
		<div className={styles.container}>
			{scores.map(value => {
				if (score >= value) {
					return <FillStar key={value} />;
				} else return <EmptyStar key={value} />;
			})}
		</div>
	);
};

export default Raiting;
