import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomeScreen } from '../Components/main/HomeScreen';
import { ManScreen } from '../Components/main/ManScreen';
import { WomanScreen } from '../Components/main/WomanScreen';
import { Navbar } from '../Components/navbar/Navbar';

export const DashBoardRouter = () => {
	return (
		<>
			<Navbar />
			<div>
				<Switch>
					<Route path="/home" component={HomeScreen} />
					<Route path="/woman" component={WomanScreen} />
					<Route path="/man" component={ManScreen} />
					<Redirect to="/home" />
				</Switch>
			</div>
		</>
	);
};
