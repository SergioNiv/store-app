import { types } from '../type/types';

export const addNewItemCart = (clothes) => ({
	type: types.cartAddINewItem,
	payload: clothes,
});

export const modifyPriceTotal = () => ({
	type: types.cartPriceTotal,
});

export const incrementPriceTotal = (price, id) => ({
	type: types.cartIncrementTotalPrice,
	payload: {
		price,
		id,
	},
});

export const decrementPriceTotal = (price, id) => ({
	type: types.cartDecrementTotalPrice,
	payload: {
		price,
		id,
	},
});

export const cartDeleteItem = (id, sizeSelect) => ({
	type: types.cartDeleteItem,
	payload: {
		id,
		sizeSelect,
	},
});
