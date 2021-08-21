import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ClothesCard } from './ClothesCard';
import { FilterScreen } from '../main/FilterScreen';
import { useDispatch, useSelector } from 'react-redux';
import { filterSearchMenu } from '../../actions/filter';

export const ClothesSearchResults = () => {
	const { name } = useParams();
	//const parseClothes = JSON.parse(name);
	const { clothes } = useSelector((state) => state.filter);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(filterSearchMenu(name));
	}, [name, dispatch]);
	return (
		<>
			<FilterScreen />
			{name !== '' && clothes.length === 0 && (
				<div className="search__alert">No se encontró "{name}"</div>
			)}
			<div className="grid__container">
				{clothes.map((clot) => (
					<ClothesCard key={clot.id} {...clot} />
				))}
			</div>
		</>
	);
};
