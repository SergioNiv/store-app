import React from 'react';
import { ClothesList } from '../clothes/ClothesList';

export const ManScreen = () => {
	return (
		<div>
			<h1>ManScreen</h1>
			<ClothesList gender="hombre" />
		</div>
	);
};
