import { types } from '../type/types';

const initialState = {
	cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
	totalPrice: 0,
};
export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.cartAddINewItem:
			const validItemRepeated = () => {
				for (let i = 0; i <= state.cartItems.length - 1; i++) {
					if (state.cartItems.length !== 0) {
						if (
							state.cartItems[i].id === action.payload.id &&
							state.cartItems[i].sizeSelect === action.payload.sizeSelect
						) {
							console.log('me salí');
							return null;
						}
					}
				}
				return action.payload;
			};
			return {
				...state,
				/* cartItems: [...state.cartItems, action.payload], */

				//TODO: validar items repetidos, para no agregarlos en el state
				//item.id !== action.payload.id ? action.payload : []
				/* cartItems: [...state.cartItems, validarItemRepetido()], */
				cartItems:
					validItemRepeated() !== null
						? [...state.cartItems, action.payload]
						: [...state.cartItems],
			};
		case types.cartPriceTotal:
			return {
				...state,
				totalPrice: state.cartItems
					.reduce(
						(sum, value) =>
							typeof value.price == 'number'
								? sum + value.price * value.items
								: sum,
						0
					)
					.toFixed(2),
			};

		case types.cartIncrementTotalPrice:
			const incrementState = () => {
				for (let i = 0; i < state.cartItems.length; i++) {
					if (
						state.cartItems[i].id === action.payload.id &&
						state.cartItems[i].sizeSelect === action.payload.sizeSelect
					) {
						state.cartItems[i].items = state.cartItems[i].items + 1;
					}
				}
				return [...state.cartItems];
			};

			return {
				...state,
				cartItems: incrementState(),
			};

		case types.cartDecrementTotalPrice:
			const decrementState = () => {
				for (let i = 0; i < state.cartItems.length; i++) {
					if (
						state.cartItems[i].id === action.payload.id &&
						state.cartItems[i].sizeSelect === action.payload.sizeSelect
					) {
						state.cartItems[i].items = state.cartItems[i].items - 1;
					}
				}
				return [...state.cartItems];
			};
			return {
				...state,
				cartItems: decrementState(),
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
