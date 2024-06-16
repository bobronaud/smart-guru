import Clock from '@/assets/icons/clock.svg';
import Button from '@/components/ui/button/Button';
import Place from '@/components/ui/place/Place';
import styles from './UiKit.module.scss';

const UiKit = () => {
	return (
		<div className={styles.container}>
			<div /*Div с кнопками. Для удобства можно свернуть*/>
				<div className={styles.block}>
					<Button
						variant='primary'
						size='lg'
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='secondary'
						size='lg'
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='outlined'
						size='lg'
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='primary'
						size='sm'
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='secondary'
						size='sm'
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='outlined'
						size='sm'
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
				</div>
				<div className={styles.block}>
					<Button
						variant='primary'
						size='lg'
						disabled
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='secondary'
						size='lg'
						disabled
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='outlined'
						size='lg'
						disabled
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='primary'
						size='sm'
						disabled
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='secondary'
						size='sm'
						disabled
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='outlined'
						size='sm'
						disabled
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
				</div>
			</div>
			<hr />
			<div /*div с лейблами о наборе*/>
				<div className={styles.block}>
					<Place type={'inProgress'} />
					<Place type={'almostFinished'} />
					<Place type={'finished'} />
				</div>
			</div>
			<hr />
		</div>
	);
};

export default UiKit;
