import React from 'react';
import { CarouselFeatured } from './CarouselFeatured';
import { CarouselPortada } from './CarouselPortada';

export const HomeScreen = () => {
	return (
		<div>
			<CarouselPortada />
			<CarouselFeatured />
		</div>
	);
};
