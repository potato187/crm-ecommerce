import { uuid } from '@/utils';
import { Route } from 'react-router-dom';

const ListRoute = ({ Component = () => {}, routes = [], ...rest }) => {
	const key = uuid();
	return (
		<Route key={key} element={<Component />} {...rest}>
			{routes.length ? routes.map(ListRoute) : null}
		</Route>
	);
};

export default ListRoute;
