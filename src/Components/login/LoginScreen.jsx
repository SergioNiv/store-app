import React from 'react';

export const LoginScreen = ({ history }) => {
	const handleLogin = () => {
		history.replace('/');
	};

	return (
		<div>
			<h1>LoginScreen</h1>
			<button onClick={handleLogin}>Ingresar</button>
		</div>
	);
};
