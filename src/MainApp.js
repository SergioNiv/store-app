import React, { useEffect, useReducer } from 'react';
import './styles/normalize.css';
import './styles/movil/moviles.scss';
import { RouterApp } from './routers/RouterApp';
import { authReducer } from './auth/authReducer';
import { AuthContext } from './auth/AuthContext';

export const MainApp = () => {
	const init = () => {
		return (
			JSON.parse(localStorage.getItem('user')) || {
				logged: false,
			}
		);
	};
	const [user, dispatch] = useReducer(authReducer, {}, init);

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user));
	}, [user]);
	return (
		<>
			<AuthContext.Provider value={{ user, dispatch }}>
				<RouterApp />
			</AuthContext.Provider>
		</>
	);
};
