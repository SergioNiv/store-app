import React from 'react';
import { ItemCart } from './ItemCart';

export const ShoppingCartScreen = () => {
	return (
		<div className="cart__container">
			<div className="cart__resumen">
				<h3 className="cart__title">Carrito de Compras</h3>
				<span className="cart__products">0 Productos</span>

				<div className="cart__price-container">
					<span className="cart__text-total">Total</span>
					<span className="cart__price-total">S/. 1158.00</span>
				</div>
			</div>

			<div className="cart__item-container">
				<ItemCart />
			</div>

			<div className="cart__btn-container">
				<button className="cart__btn">Ir a pagar</button>
			</div>
		</div>
	);
};
