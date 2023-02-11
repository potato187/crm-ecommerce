import useAuth from '@hooks/useAuth';
import { PATH } from '@routes';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const withRedirect = (Component, to = PATH.ADMIN_USER_MGT) => {
	return (props) => {
		const navigate = useNavigate();
		const isAuthenticated = useAuth();

		useEffect(() => {
			if (isAuthenticated) {
				navigate(to);
			}
		}, [isAuthenticated]);

		return <Component {...props} />;
	};
};

export default withRedirect;
