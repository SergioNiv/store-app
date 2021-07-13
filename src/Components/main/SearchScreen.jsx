import React from 'react';
import { clothes } from '../../data/clothes';
import { ClothesCard } from '../clothes/ClothesCard';

export const SearchScreen = () => {
	return (
		<div>
			<h1>Results</h1>
			{clothes.map((clot) => (
				<ClothesCard key={clot.id} {...clot} />
			))}
		</div>
	);
};
