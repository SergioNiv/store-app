import React from 'react';
import { useParams } from 'react-router-dom';
import { ClothesCard } from './ClothesCard';

export const ClothesSearchResults = () => {
	const { name } = useParams();
	const parseClothes = JSON.parse(name);

	return (
		<>
			<h1>Results</h1>
			<div className="grid__container">
				{parseClothes.map((clot) => (
					<ClothesCard key={clot.id} {...clot} />
				))}
			</div>
		</>
	);
};
