import cn from 'classnames';
import styles from './Place.module.scss';

interface PlaceProps {
	type: 'inProgress' | 'almostFinished' | 'finished';
}
const Place = ({ type }: PlaceProps) => {
	const message = {
		inProgress: 'Идёт набор',
		almostFinished: 'Набор заканчивается',
		finished: 'Набор закончен',
	};

	const classes = cn(styles.container, styles[type]);

	return <div className={classes}>{message[type]}</div>;
};

export default Place;
