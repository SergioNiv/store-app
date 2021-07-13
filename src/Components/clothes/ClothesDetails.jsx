import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getClothesById } from '../../selectors/getClothesById';

export const ClothesDetails = () => {
	const { clotId } = useParams();
	const clothes = getClothesById(clotId);

	if (!clothes) {
		return <Redirect to="/" />;
	}
	console.log(clothes);
	return (
		<div>
			<h1>ClothesDetails</h1>
		</div>
	);
};
