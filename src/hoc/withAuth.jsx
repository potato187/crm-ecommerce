import useAuth from '@hooks/useAuth';
import { PATH } from '@routes';
import { Component } from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
	return (props) => {
		const isAuthenticated = useAuth();
		if (!isAuthenticated) return <Navigate to={PATH.AUTH_SIGN_IN} replace />;

		return <Component {...props} />;
	};
};

export default withAuth;
