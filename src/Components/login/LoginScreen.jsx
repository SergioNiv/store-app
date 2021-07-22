import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../type/types';

export const LoginScreen = ({ history }) => {
	const { dispatch } = useContext(AuthContext);

	const handleLogin = () => {
		history.replace('/');
		dispatch({
			type: types.login,
			payload: {
				name: 'Sergio',
			},
		});
	};
	return (
		<div>
			<h1>LoginScreen</h1>
			<button onClick={handleLogin}>Ingresar</button>
		</div>
	);
};
