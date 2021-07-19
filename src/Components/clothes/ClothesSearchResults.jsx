import React from 'react';
import { useParams } from 'react-router-dom';
import { ClothesCard } from './ClothesCard';
import { FilterScreen } from '../main/FilterScreen';

export const ClothesSearchResults = () => {
	const { name } = useParams();
	const parseClothes = JSON.parse(name);

	return (
		<>
			<FilterScreen />
			<div className="grid__container">
				{parseClothes.map((clot) => (
					<ClothesCard key={clot.id} {...clot} />
				))}
			</div>
		</>
	);
};
