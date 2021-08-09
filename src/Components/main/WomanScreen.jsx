import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterClothesByGender } from '../../actions/filter';
import { ClothesList } from '../clothes/ClothesList';
import { FilterScreen } from './FilterScreen';

export const WomanScreen = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(filterClothesByGender('mujer'));
	}, [dispatch]);
	return (
		<div>
			<FilterScreen />
			<ClothesList />
		</div>
	);
};
