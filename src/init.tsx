import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const init = async () => {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
};

export default init;
