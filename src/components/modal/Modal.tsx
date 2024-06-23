import { useAppDispatch, useAppSelector } from '@/hooks';
import getModlaType from '@/store/selectors/getModalType';
import isOpenModal from '@/store/selectors/isOpenModal';
import { closeModal } from '@/store/slices/modalSlice';
import { ModalType } from '@/types/modal';
import { useEffect } from 'react';
import styles from './Modal.module.scss';
import LogIn from './logIn/LogIn';
import Role from './role/Role';
import SignUp from './signUp/SignUp';

type ModalComponent = {
	[key in ModalType]: JSX.Element;
};

const Modal = () => {
	const dispatch = useAppDispatch();
	const isOpen = useAppSelector(isOpenModal);
	const type = useAppSelector(getModlaType);
	const modals: Partial<ModalComponent> = {
		signUp: <SignUp />,
		logIn: <LogIn />,
		role: <Role />,
	};

	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				dispatch(closeModal());
			}
		};

		window.addEventListener('keydown', handleEscape);

		return () => {
			window.removeEventListener('keydown', handleEscape);
		};
	}, []);

	return isOpen && <div className={styles.bg}>{modals[type]}</div>;
};

export default Modal;
