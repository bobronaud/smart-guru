export type ModalType = 'logIn' | 'signUp' | 'role';

export type State = {
	type: ModalType;
	isOpen: boolean;
};
