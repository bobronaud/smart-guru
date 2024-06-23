import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Modal from './components/modal/Modal';
import createStore from './store';

const init = async () => {
	const store = createStore();

	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppRoutes />
				<Modal />
			</BrowserRouter>
		</Provider>
	);
};

export default init;
