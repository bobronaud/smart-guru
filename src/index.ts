import { createRoot } from 'react-dom/client';
import './assets/styles/index.scss';
import init from './init';

const run = async () => {
	const root = document.getElementById('root');
	const container = createRoot(root);
	container.render(await init());
};

run();
