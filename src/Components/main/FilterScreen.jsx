import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	filterClothesByColor,
	filterClothesByPrice,
	filterClothesByType,
} from '../../actions/filter';

export const FilterScreen = () => {
	const dispatch = useDispatch();
	const { gender } = useSelector((state) => state.filter);

	const [filterState, setFilterState] = useState(false);
	const [orderState, setOrderState] = useState(false);

	const handleActiveFilter = () => setFilterState(!filterState);
	const handleActiveOrder = () => setOrderState(!orderState);

	return (
		<div className="filter">
			<div className="filter__type">
				<div onClick={handleActiveFilter} className="type__title-container">
					<span className="type__title">Filtrar</span>
				</div>
				<ul className={`type__menu ${filterState && 'activeFilterType'}`}>
					<button onClick={handleActiveFilter} className="btn__back">
						Atrás
					</button>
					<details className="details__container" open>
						<summary className="type__menu-link">Tipo</summary>
						<ul className="type__submenu">
							<li
								className="type__submenu-link"
								onClick={() => dispatch(filterClothesByType('polo', gender))}
							>
								Polo
							</li>
							<li
								className="type__submenu-link"
								onClick={() => dispatch(filterClothesByType('sueter', gender))}
							>
								Sueter
							</li>
							<li
								className="type__submenu-link"
								onClick={() =>
									dispatch(filterClothesByType('pantalones', gender))
								}
							>
								Pantalón
							</li>
							{gender === 'mujer' ? (
								<li
									className="type__submenu-link"
									onClick={() =>
										dispatch(filterClothesByType('blusas', gender))
									}
								>
									Blusa
								</li>
							) : (
								<li
									className="type__submenu-link"
									onClick={() =>
										dispatch(filterClothesByType('blusas', gender))
									}
								>
									Camisa
								</li>
							)}
						</ul>
					</details>

					<details className="details__container" open>
						<summary className="type__menu-link">Color</summary>
						<ul className="type__submenu">
							<li
								className="type__submenu-link"
								onClick={() => dispatch(filterClothesByColor('Negro', gender))}
							>
								Negro
							</li>
							<li
								className="type__submenu-link"
								onClick={() =>
									dispatch(filterClothesByColor('Turquesa', gender))
								}
							>
								Turquesa
							</li>
							<li
								className="type__submenu-link"
								onClick={() =>
									dispatch(filterClothesByColor('Amarillo', gender))
								}
							>
								Amarillo
							</li>
							<li
								className="type__submenu-link"
								onClick={() => dispatch(filterClothesByColor('Blanco', gender))}
							>
								Blanco
							</li>
							<li
								className="type__submenu-link"
								onClick={() =>
									dispatch(filterClothesByColor('Celeste', gender))
								}
							>
								Celeste
							</li>
							<li
								className="type__submenu-link"
								onClick={() => dispatch(filterClothesByColor('Verde', gender))}
							>
								Verde
							</li>
							<li
								className="type__submenu-link"
								onClick={() => dispatch(filterClothesByColor('Azul', gender))}
							>
								Azul
							</li>
							<li
								className="type__submenu-link"
								onClick={() => dispatch(filterClothesByColor('Café', gender))}
							>
								Café
							</li>
							<li
								className="type__submenu-link"
								onClick={() => dispatch(filterClothesByColor('Gris', gender))}
							>
								Gris
							</li>
							<li
								className="type__submenu-link"
								onClick={() => dispatch(filterClothesByColor('Rojo', gender))}
							>
								Rojo
							</li>
							<li
								className="type__submenu-link"
								onClick={() => dispatch(filterClothesByColor('Piel', gender))}
							>
								Piel
							</li>
						</ul>
					</details>
				</ul>
			</div>
			<div className="filter__order">
				<div onClick={handleActiveOrder} className="order__title-container">
					<span className="order__title">Ordenar</span>
				</div>
				<ul className={`order__menu ${orderState && 'activeFilterType'}`}>
					<button onClick={handleActiveOrder} className="btn__back">
						Atrás
					</button>
					<details className="details__container" open>
						<summary className="order__menu-link">Por precio</summary>
						<ul className="order__submenu">
							<li
								className="order__submenu-link"
								onClick={() =>
									dispatch(filterClothesByPrice('ascendente', gender))
								}
							>
								Ascendente
							</li>
							<li
								className="order__submenu-link"
								onClick={() =>
									dispatch(filterClothesByPrice('descendente', gender))
								}
							>
								Descendente
							</li>
						</ul>
					</details>
				</ul>
			</div>
		</div>
	);
};
