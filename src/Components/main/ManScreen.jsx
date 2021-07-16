import React from 'react';
import { ClothesList } from '../clothes/ClothesList';
import { FilterScreen } from './FilterScreen';

export const ManScreen = () => {
	return (
		<div>
			<FilterScreen />
			<ClothesList gender="hombre" />
		</div>
	);
};
