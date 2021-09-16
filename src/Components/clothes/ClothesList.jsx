import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ClothesCard } from './ClothesCard';
import { ClothesPaginationList } from './ClothesPaginationList';

export const ClothesList = () => {
	const { clothes } = useSelector((state) => state.filter);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			{clothes.length === 0 && (
				<div className="search__alert">" No se encontró ningún elemento "</div>
			)}
			{clothes.length !== 0 && (
				<div className="container__grid_list">
					<div className="grid animate__animated animate__fadeIn animate__faster">
						{clothes.map((clothes) => (
							<ClothesCard key={clothes.id} {...clothes} />
						))}
					</div>
					<ClothesPaginationList />
				</div>
			)}
		</>
	);
};
