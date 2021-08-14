import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyPriceTotal } from '../../actions/cart';
import { ItemCart } from './ItemCart';

export const ShoppingCartScreen = () => {
	const { cartItems, totalPrice } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(modifyPriceTotal());
	}, [cartItems, dispatch]);

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);

	return (
		<div className="cart__container">
			<div className="cart__resumen">
				<h3 className="cart__title">Carrito de Compras</h3>
				<span className="cart__products">{cartItems.length} Productos</span>

				<div className="cart__price-container">
					<span className="cart__text-total">Total</span>
					<span className="cart__price-total">S/. {totalPrice}</span>
				</div>
			</div>

			<div className="cart__item-container">
				{cartItems.map((item) => (
					<ItemCart
						key={`${item.id}${item.sizeSelect}`}
						{...item}
						totalPrice={totalPrice}
					/>
				))}
			</div>
			<div className="espaciador"></div>
			<div className="cart__btn-container">
				<button className="cart__btn">Ir a pagar</button>
			</div>
		</div>
	);
};
