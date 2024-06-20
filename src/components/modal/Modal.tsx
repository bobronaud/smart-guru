import styles from './Modal.module.scss';
import SignUp from './signUp/SignUp';

const Modal = () => {
	const type = 'signUp';
	const modals = {
		signUp: <SignUp />,
	};

	return <div className={styles.bg}>{modals[type]}</div>;
};

export default Modal;
