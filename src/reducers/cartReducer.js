import { types } from '../type/types';

const initialState = {
	cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
	totalPrice: 0,
};
export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.cartAddINewItem:
			return {
				...state,
				cartItems: [...state.cartItems, action.payload],

				//TODO: validar items repetidos, para no agregarlos en el state
				/* cartItems: [
					...state.cartItems,
					...state.cartItems.map(
						(item) => {
							if (item.id !== action.payload.id) {
								return action.payload;
							}
						}

						//item.id !== action.payload.id ? action.payload : []
					),
				], */
			};
		case types.cartPriceTotal:
			return {
				...state,
				totalPrice: state.cartItems.reduce(
					(sum, value) =>
						typeof value.price == 'number' ? sum + value.price : sum,
					0
				),
			};

		case types.cartIncrementTotalPrice:
			return {
				...state,
				totalPrice: state.totalPrice + action.payload,
			};

		case types.cartDecrementTotalPrice:
			return {
				...state,
				totalPrice: state.totalPrice - action.payload,
			};
		case types.cartDeleteItem:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(item) =>
						item.id !== action.payload.id ||
						item.sizeSelect !== action.payload.sizeSelect
				),
			};

		default:
			return state;
	}
};
