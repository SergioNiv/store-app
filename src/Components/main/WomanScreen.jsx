import React from 'react';
import { ClothesList } from '../clothes/ClothesList';
import { FilterScreen } from './FilterScreen';

export const WomanScreen = () => {
	return (
		<div>
			<FilterScreen />
			<ClothesList gender="mujer" />
		</div>
	);
};
