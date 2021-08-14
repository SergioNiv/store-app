import React from 'react';

import { useDispatch } from 'react-redux';
import {
	cartDeleteItem,
	decrementPriceTotal,
	incrementPriceTotal,
} from '../../actions/cart';
import { useCounter } from '../../hooks/useCounter';

export const ItemCart = ({ name, sizeSelect, price, id }) => {
	const dispatch = useDispatch();
	const { counter, increment, decrement } = useCounter(1);

	const handleDecrement = () => {
		decrement();
		counter > 1 && dispatch(decrementPriceTotal(price));
	};
	const handleIncrement = () => {
		increment();
		dispatch(incrementPriceTotal(price));
	};

	const handleDeleteItem = () => {
		dispatch(cartDeleteItem(id, sizeSelect));
	};

	return (
		<div className="item__cart">
			<div className="container__cart">
				<figure className="item__img-container">
					<span className="cart__indicator">{counter}</span>
					<img
						className="item__cart-img"
						src={`../assets/moda/${id}.jpg`}
						alt="algo"
					/>
				</figure>
				<div className="item__text">
					<span className="item__name">{name}</span>
					<span className="item__shipping">Talla {sizeSelect}</span>
					<span className="item__shipping">Envio a domicilio</span>
					<span className="item__price">s./ {price}</span>
				</div>
			</div>

			<div className="buttons__add-delete">
				<div className="cart__btn-delete">
					<i className="fas fa-times"></i>
					<span className="btn__delete-text" onClick={handleDeleteItem}>
						Eliminar
					</span>
				</div>

				<div className="cart__btn-add">
					<span className="btn__rest" onClick={handleDecrement}>
						-
					</span>
					<span className="cart__count">{counter}</span>
					<span className="btn__add" onClick={handleIncrement}>
						+
					</span>
				</div>
			</div>
		</div>
	);
};
