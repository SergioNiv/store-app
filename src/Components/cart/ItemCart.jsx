import React from 'react';

export const ItemCart = () => {
	return (
		<div className="item__cart">
			<div className="container__cart">
				<figure className="item__img-container">
					<span className="cart__indicator">1</span>
					<img
						className="item__cart-img"
						src="../assets/moda/001.jpg"
						alt="algo"
					/>
				</figure>
				<div className="item__text">
					<span className="item__name">Blusa mujer</span>
					<span className="item__shipping">Envio a domicilio</span>
					<span className="item__price">s./ 39.90</span>
				</div>
			</div>

			<div className="buttons__add-delete">
				<div className="cart__btn-delete">
					<i className="fas fa-times"></i>
					<span className="btn__delete-text">Eliminar</span>
				</div>

				<div className="cart__btn-add">
					<span className="btn__rest">-</span>
					<span className="cart__count">1</span>
					<span className="btn__add">+</span>
				</div>
			</div>
		</div>
	);
};
