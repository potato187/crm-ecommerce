import { Navigate, Route } from 'react-router-dom';
import { PATH } from '@routes';

const PrivateRoute = ({ Component = null, children = null, ...rest }) => {
	const isAuth = () => true;
	return isAuth ? (
		<Route element={<Component {...rest} />}>{children}</Route>
	) : (
		<Navigate to={PATH.SIGN_IN} replace={true} />
	);
};

export default PrivateRoute;
