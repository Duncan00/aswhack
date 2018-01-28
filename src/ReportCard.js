import React, {Component} from 'react';
import './App.css';
import {Label, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import 'rc-slider/assets/index.css';

class ReportCard extends Component {
	render() {
		const data = [
			{name: '01/06/2017', Control: 4000, Test: 4100},
			{name: '01/07/2017', Control: 3000, Test: 3100},
			{name: '01/08/2017', Control: 2000, Test: 2100},
			{name: '01/09/2017', Control: 2780, Test: 2980},
			{name: '01/10/2017', Control: 1890, Test: 2290},
			{name: '01/11/2017', Control: 2390, Test: 2490},
			{name: '01/12/2017', Control: 3490, Test: 3690},
		];

		return (
			<div className="App">
				<header className="App-header">
					<img style={{height: 120}} src="http://www.avenuek.com.my/file/2016/06/ws-logo1.jpg"/>
				</header>
				<h1 style={{fontSize: 36}} className="App-title">AB Testing Report Card</h1>
				<h1 style={{paddingTop: 36}} className="App-title">CAMPAIGN SCORE (0 - 1)</h1>
				<h1 style={{fontSize: 48}} className="App-title">0.9</h1>
				<p style={{fontSize: 24}}>
					Revenue: <span style={{color:'green'}}>&#8593;</span> +3900
				</p>
				<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 'auto', paddingTop: 50}}>
					<div style={{flexGrow: 1}}/>
					<LineChart width={400} height={300} data={data}
							   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
						<XAxis dataKey="name"/>
						<YAxis>
							<Label value="Sales (USD)" offset={0} angle={-90} position="insideLeft"/>
						</YAxis>
						<CartesianGrid strokeDasharray="3 3"/>
						<Tooltip/>
						<Legend/>
						<Line type="monotone" dataKey="Control" stroke="#ff0000"/>
						<Line type="monotone" dataKey="Test" stroke="#82ca9d"/>
					</LineChart>
					<div style={{flexGrow: 1}}/>
				</div>
			</div>
		);
	}
}

export default ReportCard;
