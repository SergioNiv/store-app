import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPassword } from '../../actions/auth';
import { setError, setRemoveError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = ({ history }) => {
	const dispatch = useDispatch();
	const { ui } = useSelector((state) => state);
	const { msgError, isLoggedIn } = ui;

	useEffect(() => {
		if (isLoggedIn) {
			history.replace('/');
		}
	}, [isLoggedIn, history]);

	const [formValue, handleInputchange] = useForm({
		name: 'Mayra Quiche',
		email: 'prueba-mayra@gmail.com',
		password: 'Devdabot123',
		password2: 'Devdabot123',
	});

	const { name, email, password, password2 } = formValue;

	const handleRegister = (e) => {
		e.preventDefault();

		if (isFormvalid()) {
			dispatch(startRegisterWithEmailPassword(email, password, name));
		}
	};

	const isFormvalid = () => {
		if (name.trim().length === 0) {
			dispatch(setError('Name is required'));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError('Email is not valid'));
			return false;
		} else if (password !== password2 || password.length < 5) {
			dispatch(
				setError(
					'Passwords is not valid, keys must be equal and longer than 6 characters'
				)
			);
			return false;
		}
		dispatch(setRemoveError());
		return true;
	};

	return (
		<>
			<h3 className="auth__title">Register</h3>
			{msgError && <div className="auth__alert-error">{msgError}</div>}
			<form onSubmit={handleRegister}>
				<div className=""></div>
				<input
					type="text"
					placeholder="Name"
					name="name"
					className="auth__input"
					autoComplete="off"
					onChange={handleInputchange}
					value={name}
				/>

				<input
					type="text"
					placeholder="Email"
					name="email"
					className="auth__input"
					autoComplete="off"
					onChange={handleInputchange}
					value={email}
				/>

				<input
					type="password"
					placeholder="Password"
					name="password"
					className="auth__input"
					onChange={handleInputchange}
					value={password}
				/>

				<input
					type="password"
					placeholder="Confirm password"
					name="password2"
					className="auth__input"
					onChange={handleInputchange}
					value={password2}
				/>

				<button type="submit" className="btn mb-20">
					Register
				</button>

				<Link to="/auth/login" className="link">
					Already registered?
				</Link>
			</form>
		</>
	);
};
