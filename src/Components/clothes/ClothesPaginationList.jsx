import React from 'react';

export const ClothesPaginationList = ({
	page,
	setPageState,
	clothesScreen,
	clothesTotal,
}) => {
	const pagesTotal = Math.ceil(clothesTotal / clothesScreen);

	const getBlocksPagination = () => {
		const resultpages = [];
		for (let i = 1; i <= pagesTotal; i++) {
			resultpages.push(
				<span
					key={i}
					onClick={() => {
						localStorage.setItem('pageState', i);
						setPageState(i);
					}}
					className={`pagination__block ${page === i && 'activate'}`}
				>
					{i}
				</span>
			);
		}
		return resultpages;
	};

	return (
		<div className="list__pagination">
			<div className="list__pagination-container">
				<span
					className="pagination__decrement"
					onClick={() => {
						if (page !== 1) {
							localStorage.setItem('pageState', page - 1);
							setPageState(page - 1);
						}
					}}
				>
					<i className="fas fa-chevron-left"></i>Anterior
				</span>

				<div className="pagination__container-block">
					{getBlocksPagination()}
				</div>

				<span
					className="pagination__increment"
					onClick={() => {
						localStorage.setItem('pageState', page + 1);
						setPageState(page + 1);
					}}
				>
					Siguiente<i className="fas fa-chevron-right"></i>
				</span>
			</div>
		</div>
	);
};
