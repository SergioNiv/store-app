import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Startlogout } from '../../actions/auth';
import { clothesLogoutCleaning } from '../../actions/filter';
import { isLoggedEnd } from '../../actions/ui';

export const NavLogout = () => {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(Startlogout());
		dispatch(isLoggedEnd());
		dispatch(clothesLogoutCleaning());
	};
	return (
		<Link to="/auth/login" className="nav__login" onClick={handleLogout}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="22"
				height="22"
				fill="currentColor"
				className="bi bi-door-open"
				viewBox="0 0 16 16"
			>
				<path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
				<path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
			</svg>
		</Link>
	);
};
