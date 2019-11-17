import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';

const App = () => {
	const handleRoute = e => {
		this.currentUrl = e.url;
	};

	return (
		<div id="app">
			<Header />
			<Router onChange={handleRoute}>
				<Home path="/" />
			</Router>
		</div>
	);
};

export default App;
