import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { LoginScreen } from '../Components/login/LoginScreen';
import { DashBoardRouter } from './DashBoardRouter';

export const RouterApp = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/login" component={LoginScreen} />
					<Route path="/" component={DashBoardRouter} />
					<Redirect to="/" />
				</Switch>
			</div>
		</Router>
	);
};
