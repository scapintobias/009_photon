import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/navbar';
import Homepage from './pages/homepage';

import { __RouterContext } from 'react-router';
export function useRouter() {
	return useContext(__RouterContext);
}

function ScrollToTop({ children }) {
	const {
		location: { pathname },
	} = useRouter();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return children || null;
}

function PageContent() {
	return (
		<Switch>
			<Route path='/' exact component={Homepage} />
		</Switch>
	);
}

export default function App() {
	return (
		<Router>
			<ScrollToTop>
				<Navbar />
				<div style={{ overflow: 'hidden' }}>
					<ParallaxProvider>
						<PageContent />
					</ParallaxProvider>
				</div>
			</ScrollToTop>
		</Router>
	);
}
