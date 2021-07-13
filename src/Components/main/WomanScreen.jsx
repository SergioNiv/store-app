import React from 'react';
import { ClothesList } from '../clothes/ClothesList';

export const WomanScreen = () => {
	return (
		<div>
			<h1>WomanScreen</h1>
			<ClothesList gender="mujer" />
		</div>
	);
};
