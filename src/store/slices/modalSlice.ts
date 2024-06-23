import { ModalType, State } from '@/types/modal';
import { createSlice } from '@reduxjs/toolkit';

const initialState: State = {
	type: null,
	isOpen: false,
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openModal: (state, action: { payload: ModalType }) => {
			state.type = action.payload;
			state.isOpen = true;
		},
		closeModal: state => {
			state.type = null;
			state.isOpen = false;
		},
	},
});

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
