import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getClothesById } from '../../selectors/getClothesById';

export const ClothesDetails = () => {
	const { clotId } = useParams();
	const clothes = useMemo(() => getClothesById(clotId), [clotId]);

	const { id, name, size, price, characters } = clothes;

	const { S28, M30, L32, XL34, XXL36 } = size[0];

	const { material, type, color } = characters[0];

	console.log(S28, M30, L32, XL34, XXL36);
	if (!clothes) {
		return <Redirect to="/" />;
	}
	console.log(clothes);
	return (
		<div className="details__container">
			<figure className="details__container-img">
				<img
					className="details__img"
					src={`../assets/moda/${id}.jpg`}
					alt={name}
				/>
			</figure>
			<div className="details__text">
				<span className="details__name">{name}</span>
				<span className="details__price">s./ {price}</span>
				<span className="details__shipping">Envio a domicilio</span>
				<span className="details__size-title">
					Unidades disponibles por talla:
				</span>
				<div className="details__size">
					<span className="size">S</span>
					<span className="size">M</span>
					<span className="size">L</span>
					<span className="size">XL</span>
					<span className="size">XXL</span>
				</div>
				<div className="details__size-result">
					<span className="size__result">{S28} ud.</span>
					<span className="size__result">{M30} ud.</span>
					<span className="size__result">{L32} ud.</span>
					<span className="size__result">{XL34} ud.</span>
					<span className="size__result">{XXL36} ud.</span>
				</div>
				<div className="characters">
					<span className="characters__title">Características:</span>
					<ul className="charaters__list">
						<li className="characters__list-item">
							<span className="weight">Material:</span> {material}
						</li>
						<li className="characters__list-item">
							<span className="weight">Tipo:</span> {type}
						</li>
						<li className="characters__list-item">
							<span className="weight">Color:</span> {color}
						</li>
					</ul>
				</div>
				<button className="btn__add-car">Elige tu talla</button>
				<button className="btn__back">Volver</button>
			</div>
		</div>
	);
};
