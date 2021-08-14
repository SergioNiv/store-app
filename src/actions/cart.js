import { types } from '../type/types';

export const addNewItemCart = (clothes) => ({
	type: types.cartAddINewItem,
	payload: clothes,
});

export const modifyPriceTotal = () => ({
	type: types.cartPriceTotal,
});

export const incrementPriceTotal = (price) => ({
	type: types.cartIncrementTotalPrice,
	payload: price,
});
export const decrementPriceTotal = (price) => ({
	type: types.cartDecrementTotalPrice,
	payload: price,
});

export const cartDeleteItem = (id, sizeSelect) => ({
	type: types.cartDeleteItem,
	payload: {
		id,
		sizeSelect,
	},
});
