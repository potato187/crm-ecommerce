import ListRoute from '@components/features/ListRoute';
import { ROUTES, PATH } from '@routes';
import { BrowserRouter, NavLink, Routes } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<NavLink to={PATH.AUTH_SIGN_UP}>Sign Up</NavLink>
				<NavLink to={PATH.AUTH_SIGN_IN}>Sign In</NavLink>
				<NavLink to={PATH.ADMIN_USER_MGT}>ADMIN USER</NavLink>
				<Routes>{ROUTES.map(ListRoute)}</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
