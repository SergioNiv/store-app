import React, { useState } from 'react';

export const FilterScreen = () => {
	const [filterState, setFilterState] = useState(false);
	const [orderState, setOrderState] = useState(false);

	const handleActiveFilter = () => {
		setFilterState(!filterState);
	};
	const handleActiveOrder = () => {
		setOrderState(!orderState);
	};
	return (
		<div className="filter">
			<div className="filter__type">
				<div onClick={handleActiveFilter} className="type__title">
					Filtrar
				</div>
				<ul className={`type__menu ${filterState && 'activeFilterType'}`}>
					<button onClick={handleActiveFilter}>Atrás</button>
					<details className="details__container">
						<summary className="type__menu-link">Tipo</summary>
						<ul className="type__submenu">
							<li className="type__submenu-link">Polos</li>
							<li className="type__submenu-link">Sueter</li>
							<li className="type__submenu-link">Pantalón</li>
							<li className="type__submenu-link">Blusa</li>
						</ul>
					</details>
					<details className="details__container">
						<summary className="type__menu-link">Talla</summary>
						<ul className="type__submenu">
							<li className="type__submenu-link">S</li>
							<li className="type__submenu-link">M</li>
							<li className="type__submenu-link">L</li>
							<li className="type__submenu-link">XL</li>
						</ul>
					</details>
					<details className="details__container">
						<summary className="type__menu-link">Color</summary>
						<ul className="type__submenu">
							<li className="type__submenu-link">Rojo</li>
							<li className="type__submenu-link">Negro</li>
							<li className="type__submenu-link">Azúl</li>
							<li className="type__submenu-link">Verde</li>
							<li className="type__submenu-link">Amarillo</li>
						</ul>
					</details>
				</ul>
			</div>
			<div className="filter__order">
				<div onClick={handleActiveOrder} className="order__title">
					Ordenar
				</div>
				<ul className={`order__menu ${orderState && 'activeFilterType'}`}>
					<button onClick={handleActiveOrder}>Atrás</button>
					<details className="details__container" open>
						<summary className="order__menu-link">Por precio</summary>
						<ul className="order__submenu">
							<li className="order__submenu-link">Descendente</li>
							<li className="order__submenu-link">Ascendente</li>
						</ul>
					</details>
				</ul>
			</div>
		</div>
	);
};
