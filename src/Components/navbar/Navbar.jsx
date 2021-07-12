import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	const [btnMenu, setbtnMenu] = useState(false);
	const [btnSearch, setBtnSearch] = useState(false);

	const handleBtnMenu = () => {
		setbtnMenu(!btnMenu);
	};

	const handleBtnSearch = () => {
		setBtnSearch(!btnSearch);
	};
	console.log(btnSearch);
	return (
		<div className="nav__container">
			<nav className="nav">
				<figure className="nav__logo">
					<img src="#" alt="" />
				</figure>
				<button onClick={handleBtnSearch} className="nav__btn-search">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-search"
						viewBox="0 0 16 16"
					>
						<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
					</svg>
				</button>

				<Link to="/login" className="nav__login">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-door-open"
						viewBox="0 0 16 16"
					>
						<path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
						<path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
					</svg>
				</Link>

				<button className="nav__btn-store">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-cart3"
						viewBox="0 0 16 16"
					>
						<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
					</svg>
				</button>
				<div className="nav__categories">
					<span className="nav__cat-text" onClick={handleBtnMenu}>
						Categorías
					</span>
					<div className={`nav__menu ${btnMenu && 'activeMenu'}`}>
						<Link
							to="/woman"
							onClick={handleBtnMenu}
							className="nav__menu-link"
						>
							Moda mujer
						</Link>
						<Link to="/man" onClick={handleBtnMenu} className="nav__menu-link">
							Moda hombre
						</Link>
					</div>
				</div>
			</nav>
			<form className={`nav__search ${btnSearch && 'activeSearch'}`}>
				<input
					className="nav__search-input"
					placeholder="¿Qué estas buscando?"
					autoComplete="off"
					type="text"
				/>
			</form>
		</div>
	);
};
