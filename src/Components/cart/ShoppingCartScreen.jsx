import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { modifyPriceTotal } from '../../actions/cart';
import { ItemCart } from './ItemCart';

export const ShoppingCartScreen = () => {
	const { cartItems, totalPrice } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const sumarItems = cartItems.reduce((sum, value) => sum + value.items, 0);

	useEffect(() => {
		window.scrollTo(0, 0); //desplazar a la parte superior del DOM al hacer render
	}, []);

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
				<span className="cart__products">{sumarItems} Productos</span>

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
			<div className="link_shopping-continue">
				<Link className="link_shopping-continue" to="/">
					Seguir comprando
				</Link>
			</div>

			<div className="cart__btn-container">
				<button className="cart__btn">Ir a pagar</button>
			</div>
		</div>
	);
};
