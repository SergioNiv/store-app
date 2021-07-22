import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';

export const User = () => {
	const {
		user: { name },
	} = useContext(AuthContext);

	return (
		<div>
			<span>Hola {name}</span>
		</div>
	);
};
