import { RootState } from '..';

const isOpenModal = (state: RootState) => state.modal.isOpen;

export default isOpenModal;
