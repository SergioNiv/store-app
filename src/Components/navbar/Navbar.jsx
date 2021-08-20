import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import { NavLogout } from './NavLogout';
import { useDispatch, useSelector } from 'react-redux';
import { filterSearchMenu } from '../../actions/filter';

export const Navbar = () => {
	const [activeOpacity, setActiveOpacity] = useState(false);
	const [btnMenu, setBtnMenu] = useState(false);
	const [btnSearch, setBtnSearch] = useState(false);

	const { cartItems } = useSelector((state) => state.cart);

	const sumarItems = cartItems.reduce((sum, value) => sum + value.items, 0);
	const dispatch = useDispatch();
	const history = useHistory();

	const [values, handleInputChange, reset] = useForm({ name: '' });
	const { name } = values;
	//TODO: botón de scroll en la posición 0 de windows
	/* 	window.scroll({
		top: 100,
		left: 0,
		behavior: 'smooth',
	});
 */
	const handleSearch = (e) => {
		e.preventDefault();
		if (name.trim().length < 1) {
			return;
		}
		dispatch(filterSearchMenu(name));
		history.push(`/search/${name}`);
		setActiveOpacity(!activeOpacity);
		setBtnSearch(!btnSearch);
		reset();
	};

	const handleBtnMan = () => {
		setBtnMenu(!btnMenu);
		setActiveOpacity(!activeOpacity);
	};
	const handleBtnWoman = () => {
		setBtnMenu(!btnMenu);
		setActiveOpacity(!activeOpacity);
	};

	const handleBtnSearch = () => {
		setBtnSearch(!btnSearch);
		setBtnMenu(false);
		setActiveOpacity(!activeOpacity);
		if (btnMenu) {
			setActiveOpacity(true);
		}
	};
	const handleBtnMenu = () => {
		setBtnMenu(!btnMenu);
		setBtnSearch(false);
		setActiveOpacity(!activeOpacity);
		if (btnSearch) {
			setActiveOpacity(true);
		}
	};
	const handleOpacity = () => {
		setBtnMenu(false);
		setBtnSearch(false);
		setActiveOpacity(false);
	};
	return (
		<>
			<div className={`${activeOpacity && 'block-relleno'}`}></div>
			<div className={`nav__container ${activeOpacity && 'fixed'}`}>
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
						<i className="fas fa-search"></i>
						<span className="btn__search-text">Buscar</span>
					</button>
					<Link to="/cart" className="nav__btn-store">
						<span className="store__indicator">{sumarItems}</span>
						<i className="fas fa-cart-plus"></i>
						<span className="nav__store-car">Carrito</span>
					</Link>

					<NavLogout />

					<div className="nav__categories">
						<span className="nav__cat-text" onClick={handleBtnMenu}>
							Categorías
						</span>

						<div className="btn__menu" onClick={handleBtnMenu}>
							<div className="menu-activador">
								<div className={`menu__ancla ${btnMenu && 'menu-abierto'}`}>
									<span className="menu-activador-linea"></span>
									<span className="menu-activador-linea"></span>
									<span className="menu-activador-linea"></span>
								</div>
							</div>
						</div>

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
			</div>
			<div
				className={`${activeOpacity && 'opacity'}`}
				onClick={handleOpacity}
			></div>
		</>
	);
};
