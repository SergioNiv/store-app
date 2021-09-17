import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ClothesCard } from './ClothesCard';
import { ClothesPaginationList } from './ClothesPaginationList';

export const ClothesList = () => {
	const { clothes } = useSelector((state) => state.filter);

	const pageStorage = Number(localStorage.getItem('pageState') || 1);

	const [pageState, setPageState] = useState(pageStorage);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pageState]);

	const clothesScreen = 12;

	const clothesData = clothes.slice(
		(pageState - 1) * clothesScreen,
		pageState * clothesScreen
	);

	//cambiar el estado al inicial al superar el número de bloques de paginación y no muestre información
	useEffect(() => {
		if (clothesData.length === 0) {
			localStorage.setItem('pageState', 1);
			setPageState(1);
		}
	}, [clothesData]);

	useEffect(() => {
		localStorage.setItem('pageState', 1);
		setPageState(1);
	}, [clothes]);

	return (
		<>
			{clothes.length === 0 && (
				<div className="search__alert">" No se encontró ningún elemento "</div>
			)}
			{clothes.length !== 0 && (
				<div className="container__grid_list">
					<div className="grid animate__animated animate__fadeIn animate__faster">
						{clothesData.map((clothes) => (
							<ClothesCard key={clothes.id} {...clothes} />
						))}
					</div>
					<ClothesPaginationList
						page={pageState}
						setPageState={setPageState}
						clothesScreen={clothesScreen}
						clothesTotal={clothes.length}
					/>
				</div>
			)}
		</>
	);
};
