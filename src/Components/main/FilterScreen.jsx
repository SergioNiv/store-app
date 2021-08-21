import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	filterClothesByColor,
	filterClothesByPrice,
	filterClothesByType,
} from '../../actions/filter';

export const FilterScreen = () => {
	const history = useHistory();
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
					<span className="type__title">
						<i className="fas fa-filter"></i>Filtrar
					</span>
				</div>
				<div
					className={`type__menu-black ${filterState && 'activeFilterType'}`}
					onClick={() => setFilterState(!filterState)}
				>
					<ul className="type__menu">
						<button onClick={handleActiveFilter} className="btn__back">
							Atrás
						</button>
						<details className="details__container" open>
							<summary className="type__menu-link">Tipo</summary>
							<ul className="type__submenu">
								<li
									className="type__submenu-link"
									onClick={() => {
										gender && dispatch(filterClothesByType('polo', gender));
										gender || history.push('/search/polo');
									}}
								>
									Polo
								</li>
								<li
									className="type__submenu-link"
									onClick={() => {
										gender && dispatch(filterClothesByType('sueter', gender));
										gender || history.push('/search/sueter');
									}}
								>
									Sueter
								</li>
								<li
									className="type__submenu-link"
									onClick={() => {
										gender &&
											dispatch(filterClothesByType('pantalones', gender));
										gender || history.push('/search/pantalones');
									}}
								>
									Pantalón
								</li>
								{gender === 'mujer' && (
									<li
										className="type__submenu-link"
										onClick={() => {
											gender && dispatch(filterClothesByType('blusas', gender));
											gender || history.push('/search/blusas');
										}}
									>
										Blusa
									</li>
								)}

								{gender === 'hombre' && (
									<li
										className="type__submenu-link"
										onClick={() => {
											gender && dispatch(filterClothesByType('camisa', gender));
											gender || history.push('/search/camisa');
										}}
									>
										Camisa
									</li>
								)}

								{gender === null && (
									<>
										<li
											className="type__submenu-link"
											onClick={() => {
												gender &&
													dispatch(filterClothesByType('blusas', gender));
												gender || history.push('/search/blusas');
											}}
										>
											Blusa
										</li>
										<li
											className="type__submenu-link"
											onClick={() => {
												gender &&
													dispatch(filterClothesByType('camisa', gender));
												gender || history.push('/search/camisa');
											}}
										>
											Camisa
										</li>
									</>
								)}
							</ul>
						</details>

						<details className="details__container" open>
							<summary className="type__menu-link">Color</summary>
							<ul className="type__submenu">
								<li
									className="type__submenu-link"
									onClick={() => {
										gender && dispatch(filterClothesByColor('Negro', gender));
										gender || history.push('/search/negro');
									}}
								>
									Negro
								</li>
								<li
									className="type__submenu-link"
									onClick={() => {
										gender &&
											dispatch(filterClothesByColor('Turquesa', gender));
										gender || history.push('/search/turquesa');
									}}
								>
									Turquesa
								</li>
								<li
									className="type__submenu-link"
									onClick={() => {
										gender &&
											dispatch(filterClothesByColor('Amarillo', gender));
										gender || history.push('/search/amarillo');
									}}
								>
									Amarillo
								</li>
								<li
									className="type__submenu-link"
									onClick={() => {
										gender && dispatch(filterClothesByColor('Blanco', gender));
										gender || history.push('/search/blanco');
									}}
								>
									Blanco
								</li>
								<li
									className="type__submenu-link"
									onClick={() => {
										gender && dispatch(filterClothesByColor('Celeste', gender));
										gender || history.push('/search/celeste');
									}}
								>
									Celeste
								</li>
								<li
									className="type__submenu-link"
									onClick={() => {
										gender && dispatch(filterClothesByColor('Verde', gender));
										gender || history.push('/search/verde');
									}}
								>
									Verde
								</li>
								<li
									className="type__submenu-link"
									onClick={() => {
										gender && dispatch(filterClothesByColor('Azul', gender));
										gender || history.push('/search/azul');
									}}
								>
									Azul
								</li>
								<li
									className="type__submenu-link"
									onClick={() => {
										gender && dispatch(filterClothesByColor('Café', gender));
										gender || history.push('/search/café');
									}}
								>
									Café
								</li>
								<li
									className="type__submenu-link"
									onClick={() => {
										gender && dispatch(filterClothesByColor('Gris', gender));
										gender || history.push('/search/gris');
									}}
								>
									Gris
								</li>
								<li
									className="type__submenu-link"
									onClick={() => {
										gender && dispatch(filterClothesByColor('Rojo', gender));
										gender || history.push('/search/rojo');
									}}
								>
									Rojo
								</li>
								<li
									className="type__submenu-link"
									onClick={() => {
										gender && dispatch(filterClothesByColor('Piel', gender));
										gender || history.push('/search/piel');
									}}
								>
									Piel
								</li>
							</ul>
						</details>
					</ul>
				</div>
			</div>
			<div className="filter__order">
				<div onClick={handleActiveOrder} className="order__title-container">
					<span className="order__title">
						<i className="fas fa-sort"></i>Ordenar
					</span>
				</div>
				<div
					className={`order__menu-black ${orderState && 'activeFilterType'}`}
					onClick={() => setOrderState(!orderState)}
				>
					<ul className="order__menu">
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
		</div>
	);
};
