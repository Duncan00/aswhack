import React, {Component} from 'react';
import './App.css';
import Slider, {Range} from 'rc-slider';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import 'rc-slider/assets/index.css';

class ReportCard extends Component {
	render() {
		const data = [
			{name: 'Page A', Control: 4000},
			{name: 'Page B', Control: 3000},
			{name: 'Page C', Control: 2000},
			{name: 'Page D', Control: 2780},
			{name: 'Page E', Control: 1890},
			{name: 'Page F', Control: 2390},
			{name: 'Page G', Control: 3490},
		];

		const test_data = [
			{name: 'Page A', Test: 1000},
			{name: 'Page B', Test: 2000},
			{name: 'Page C', Test: 3000},
			{name: 'Page D', Test: 2780},
			{name: 'Page E', Test: 4890},
			{name: 'Page F', Test: 5390},
			{name: 'Page G', Test: 6490},
		];
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Report Card</h1>
				</header>
				<h1 className="App-title">CAMPAIGN SCORE</h1>
				<p>

					0.9
					Revenue: <span style={{color:'green'}}>&#8593;</span> +3900
				</p>
				<p className="App-intro">

				</p>
				<div style={{display: 'flex', 'flex-direction': 'row', alignItems: 'center'}}>
					<LineChart width={400} height={300} data={data}
							   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
						<XAxis dataKey="name"/>
						<YAxis/>
						<CartesianGrid strokeDasharray="3 3"/>
						<Tooltip/>
						<Legend/>
						<Line type="monotone" dataKey="Control" stroke="#82ca9d"/>
					</LineChart>
					<LineChart width={400} height={300} data={test_data}
							   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
						<XAxis dataKey="name"/>
						<YAxis/>
						<CartesianGrid strokeDasharray="3 3"/>
						<Tooltip/>
						<Legend/>
						<Line type="monotone" dataKey="Test" stroke="#82ca9d"/>
					</LineChart>
				</div>
			</div>
		);
	}
}

export default ReportCard;
