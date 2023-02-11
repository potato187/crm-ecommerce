import AdminPage from '@pages/AdminPage';
import UserMgmtPage from '@pages/UserMgmtPage';
import AuthPage from '@pages/AuthPage';
import SignInPage from '@pages/SignInPage';
import SignUpPage from '@pages/SignUpPage';
import { Navigate } from 'react-router-dom';
import withAuth from '@/hoc/withAuth';
import withRedirect from '@/hoc/withRedirect';

export const PATH = {
	ADMIN: '/admin',
	USER_MGT: 'users',
	ADMIN_USER_MGT: '/admin/users',
	ECOMMERCE: '/admin/ecommerce',
	ALL_PRODUCT: '/admin/ecommerce/products',
	AUTH: '/auth',
	SIGN_IN: 'sign-in',
	AUTH_SIGN_IN: '/auth/sign-in',
	SIGN_UP: 'sign-up',
	AUTH_SIGN_UP: '/auth/sign-up',
};

export const ROUTES = [
	{
		path: PATH.ADMIN,
		Component: withAuth(AdminPage),
		routes: [
			{
				path: PATH.USER_MGT,
				Component: UserMgmtPage,
				index: true,
			},
		],
	},
	{
		path: PATH.AUTH,
		Component: AuthPage,
		routes: [
			{
				path: PATH.SIGN_IN,
				Component: withRedirect(SignInPage, PATH.ADMIN_USER_MGT),
			},
			{
				path: PATH.SIGN_UP,
				Component: withRedirect(SignUpPage),
			},
		],
	},
	{
		index: true,
		Component: () => <Navigate to={PATH.AUTH_SIGN_IN} replace />,
	},
];
