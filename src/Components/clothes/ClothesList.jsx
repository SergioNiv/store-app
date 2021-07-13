import React, { useMemo } from 'react';
import { getClothesByGender } from '../../selectors/getClothesByGender';
import { ClothesCard } from './ClothesCard';

export const ClothesList = ({ gender }) => {
	const clothes = useMemo(() => getClothesByGender(gender), [gender]);

	return (
		<div className="grid__container">
			{clothes.map((clot) => (
				<ClothesCard key={clot.id} {...clot} />
			))}
		</div>
	);
};
