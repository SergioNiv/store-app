import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import { NavLogout } from './NavLogout';
import { useDispatch, useSelector } from 'react-redux';
import { filterSearchMenu } from '../../actions/filter';

export const Navbar = () => {
	const { name: displayName } = useSelector((state) => state.ui);
	const { cartItems } = useSelector((state) => state.cart);

	const sumarItems = cartItems.reduce((sum, value) => sum + value.items, 0);
	const dispatch = useDispatch();

	const history = useHistory();

	const [values, handleInputChange, reset] = useForm({ name: '' });
	const { name } = values;

	const handleSearch = (e) => {
		e.preventDefault();
		if (name.trim().length < 1) {
			return;
		}

		dispatch(filterSearchMenu(name));
		reset();
		history.push(`/search/${name}`);
	};

	const [btnMenu, setBtnMenu] = useState(false);
	const [btnSearch, setBtnSearch] = useState(false);

	const handleBtnMan = () => setBtnMenu(!btnMenu);
	const handleBtnWoman = () => setBtnMenu(!btnMenu);

	const handleBtnSearch = () => setBtnSearch(!btnSearch);
	const handleBtnMenu = () => setBtnMenu(!btnMenu);
	return (
		<div className="nav__container">
			<nav className="nav">
				<figure className="nav__logo">
					<Link to="/">
						<img
							src="../assets/logos/logo-white2.png"
							alt="Logo"
							className="nav__logo-img"
						/>
					</Link>
				</figure>
				<button onClick={handleBtnSearch} className="nav__btn-search">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="22"
						height="22"
						fill="currentColor"
						className="bi bi-search"
						viewBox="0 0 16 16"
					>
						<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
					</svg>
				</button>

				<NavLogout />

				<Link to="/cart" className="nav__btn-store">
					<span className="store__indicator">{sumarItems}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="22"
						height="22"
						fill="currentColor"
						className="bi bi-cart3"
						viewBox="0 0 16 16"
					>
						<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
					</svg>
				</Link>
				<div className="nav__categories">
					<span className="nav__cat-text" onClick={handleBtnMenu}>
						Categorías
					</span>
					<div className={`nav__menu ${btnMenu && 'activeMenu'}`}>
						<Link
							to="/woman"
							onClick={handleBtnWoman}
							className="nav__menu-link"
							style={{ textDecoration: 'none' }}
						>
							Moda mujer
						</Link>
						<Link
							to="/man"
							onClick={handleBtnMan}
							className="nav__menu-link radius--bottom "
							style={{ textDecoration: 'none' }}
						>
							Moda hombre
						</Link>
					</div>
				</div>
			</nav>

			<form
				onSubmit={handleSearch}
				className={`nav__search ${btnSearch && 'activeSearch'}`}
			>
				<div className="nav__search-container">
					<input
						className="nav__search-input"
						placeholder="¿Qué estas buscando?"
						autoComplete="off"
						type="text"
						name="name"
						value={name}
						onChange={handleInputChange}
					/>
				</div>
			</form>

			{displayName && (
				<div style={{ backgroundColor: 'white', padding: '5px' }}>
					Bievenida {displayName}
				</div>
			)}
		</div>
	);
};
