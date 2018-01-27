import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, BrowserRouter} from 'react-router-dom';
import ReportCard from './ReportCard';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route path="/management" component={App}/>
			<Route path="/report" component={ReportCard}/>
		</div>
	</BrowserRouter>, document.getElementById('root')
);