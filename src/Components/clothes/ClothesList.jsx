import React from 'react';
import { useSelector } from 'react-redux';

import { ClothesCard } from './ClothesCard';

export const ClothesList = () => {
	const { clothes } = useSelector((state) => state.filter);

	return (
		<div className="grid__container">
			{clothes.map((clot) => (
				<ClothesCard key={clot.id} {...clot} />
			))}
		</div>
	);
};
