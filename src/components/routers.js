import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CveDashboard from './cve-dashboard/cve-dashboard-index';
import CovidDashboard from './covid-dashboard/covid-dashboard-index';

const Routers = () => (
	<Switch>
	  <Route exact path="/" component={CveDashboard} />
	  <Route path="/covid_info" component={CovidDashboard} />
	</Switch>
)

export default Routers;
