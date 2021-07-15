import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getClothesById } from '../../selectors/getClothesById';

export const ClothesDetails = () => {
	const { clotId } = useParams();
	const clothes = useMemo(() => getClothesById(clotId), [clotId]);

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
