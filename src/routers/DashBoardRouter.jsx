import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ClothesDetails } from '../Components/clothes/ClothesDetails';
import { HomeScreen } from '../Components/home/HomeScreen';
import { ManScreen } from '../Components/main/ManScreen';
import { SearchScreen } from '../Components/main/SearchScreen';
import { WomanScreen } from '../Components/main/WomanScreen';
import { Navbar } from '../Components/navbar/Navbar';

export const DashBoardRouter = () => {
	return (
		<>
			<Navbar />
			<div>
				<Switch>
					<Route path="/home" component={HomeScreen} />
					<Route path="/details/:clotId" component={ClothesDetails} />
					<Route path="/search/:name" component={SearchScreen} />
					<Route path="/woman" component={WomanScreen} />
					<Route path="/man" component={ManScreen} />
					<Redirect to="/home" />
				</Switch>
			</div>
		</>
	);
};
