import { useSelector } from 'react-redux';

export const getClothesByType = (type) => {
	const { clothes } = useSelector((state) => state.filter);

	const validGener = ['mujer', 'hombre'];

	if (!validGener.includes(type)) {
		throw new Error(`Gender "${type}" no es correcto`);
	}

	return clothes.filter((clothes) => clothes.gender === type);
};
