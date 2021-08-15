import React from 'react';
import { useSelector } from 'react-redux';

import { ClothesCard } from './ClothesCard';

export const ClothesList = () => {
	const { clothes } = useSelector((state) => state.filter);

	return (
		<>
			<div className="grid__container">
				{clothes.map((clot) => (
					<ClothesCard key={clot.id} {...clot} />
				))}
			</div>

			{clothes.length === 0 && (
				<div style={{ textAlign: 'center' }}>
					" No se encontró ningún elemento, escoja otro tipo o color por favor "
				</div>
			)}
		</>
	);
};
