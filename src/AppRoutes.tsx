import App from './App';
import { Route, Routes } from 'react-router-dom';
import UiKit from './components/pages/uiKit/UiKit';
import routes from './routes';

const AppRoutes = () => {
	return (
		<Routes>
			<Route
				index
				element={<App />}
			/>
			<Route
				path={routes.uiKit()}
				element={<UiKit />}
			/>
		</Routes>
	);
};

export default AppRoutes;
