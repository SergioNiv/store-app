import React from 'react';

export const ClothesPaginationList = () => {
	return (
		<div className="list__pagination">
			<div className="list__pagination-container">
				<span className="pagination__decrement">
					<i className="fas fa-chevron-left"></i>Anterior
				</span>
				<div className="pagination__container-block">
					<span className="pagination__block activate">1</span>
					<span className="pagination__block">2</span>
					<span className="pagination__block">3</span>
					<span className="pagination__block">4</span>
				</div>
				<span className="pagination__increment">
					Siguiente<i class="fas fa-chevron-right"></i>
				</span>
			</div>
		</div>
	);
};
