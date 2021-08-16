import React, { useMemo } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { addNewItemCart } from '../../actions/cart';
import { getClothesById } from '../../selectors/getClothesById';

export const ClothesDetails = () => {
	const dispatch = useDispatch();
	const [sizeActive, setSizeActive] = useState(null);

	const { clotId } = useParams();
	const history = useHistory();
	const clothes = useMemo(() => getClothesById(clotId), [clotId]);

	const { id, name, type, size, price, characters } = clothes;
	const { S28, M30, L32, XL34, XXL36 } = size[0];
	const { material, typec, color } = characters[0];

	const handleReturn = () => {
		history.goBack();
	};

	const handleAddNewCard = () => {
		/* for (let i = 0; i <= cartItems.length - 1; i++) {
			if (cartItems.length !== 0) {
				console.log(cartItems[i].id, clothes.id);
				console.log(cartItems[i].sizeSelect, clothes.sizeActive);
				if (
					cartItems[i].id === clothes.id &&
					cartItems[i].sizeSelect === clothes.sizeActive
				) {
					return console.log('me salí');
				}
			}
		} */
		dispatch(
			addNewItemCart({
				...clothes,
				sizeSelect: sizeActive,
				items: 1,
			})
		);

		/* return dispatch(
			addNewItemCart({
				...clothes,
				sizeSelect: sizeActive,
				items: 1,
			})
		); */
	};

	if (!clothes) {
		return <Redirect to="/" />;
	}
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
				{type === 'pantalones' ? (
					<div className="details__size">
						<button
							className={`size ${sizeActive === '28' && 'size-active'}`}
							onClick={() => setSizeActive('28')}
						>
							28
						</button>
						<button
							className={`size ${sizeActive === '30' && 'size-active'}`}
							onClick={() => setSizeActive('30')}
						>
							30
						</button>
						<button
							className={`size ${sizeActive === '32' && 'size-active'}`}
							onClick={() => setSizeActive('32')}
						>
							32
						</button>
						<button
							className={`size ${sizeActive === '34' && 'size-active'}`}
							onClick={() => setSizeActive('34')}
						>
							34
						</button>
						<button
							className={`size ${sizeActive === '36' && 'size-active'}`}
							onClick={() => setSizeActive('36')}
						>
							36
						</button>
					</div>
				) : (
					<div className="details__size">
						<button
							className={`size ${sizeActive === 'S' && 'size-active'}`}
							onClick={() => setSizeActive('S')}
						>
							S
						</button>
						<button
							className={`size ${sizeActive === 'M' && 'size-active'}`}
							onClick={() => setSizeActive('M')}
						>
							M
						</button>
						<button
							className={`size ${sizeActive === 'L' && 'size-active'}`}
							onClick={() => setSizeActive('L')}
						>
							L
						</button>
						<button
							className={`size ${sizeActive === 'XL' && 'size-active'}`}
							onClick={() => setSizeActive('XL')}
						>
							XL
						</button>
						<button
							className={`size ${sizeActive === 'XXL' && 'size-active'}`}
							onClick={() => setSizeActive('XXL')}
						>
							XXL
						</button>
					</div>
				)}
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
							<span className="weight">Tipo:</span> {typec}
						</li>
						<li className="characters__list-item">
							<span className="weight">Color:</span> {color}
						</li>
					</ul>
				</div>

				{sizeActive ? (
					<button className="btn__add-car" onClick={handleAddNewCard}>
						Agregar al carrito
					</button>
				) : (
					<button className="btn__add-car">Elige tu talla</button>
				)}

				<button className="btn__back" onClick={handleReturn}>
					Volver
				</button>
			</div>
		</div>
	);
};
