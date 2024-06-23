import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modalSlice from './slices/modalSlice';

const rootReducer = combineReducers({
	modal: modalSlice,
});

const createStore = (preloadedState?: Partial<RootState>) =>
	configureStore({
		reducer: rootReducer,
		preloadedState,
	});

export default createStore;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
