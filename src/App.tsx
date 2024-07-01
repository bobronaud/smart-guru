import { useState } from 'react';
import Button from './components/ui/button/Button';
import { FiltersMenu } from './components/filters/FiltersMenu';

const App = () => {
	const [count, setCount] = useState(0);
	const handleclick = () => {
		setCount((prev) => prev + 1);
	};
	return (
		<div>
			<h1>Smart-guru describers: {count}</h1>
			<Button onClick={handleclick}>Describe</Button>
			<FiltersMenu></FiltersMenu>
			<Button onClick={handleclick}>Describe</Button>
		</div>
	);
};

export default App;
