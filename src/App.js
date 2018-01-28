import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './App.css';
import Slider, {Range, createSliderWithTooltip} from 'rc-slider';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label} from "recharts";
import 'rc-slider/assets/index.css';

const SliderWithTooltip = createSliderWithTooltip(Slider);

class App extends Component {
	render() {
		const line_a_key = 'sum(SALES_AMOUNT)';
		const line_b_key = 'sum(SALES_AMOUNT * SUCCESS_RATE)';
		const data = [
			{name: 'Page A', [line_a_key]: 4000, [line_b_key]: 2400},
			{name: 'Page B', [line_a_key]: 3000, [line_b_key]: 1398},
			{name: 'Page C', [line_a_key]: 2000, [line_b_key]: 9800},
			{name: 'Page D', [line_a_key]: 2780, [line_b_key]: 3908},
			{name: 'Page E', [line_a_key]: 1890, [line_b_key]: 4800},
			{name: 'Page F', [line_a_key]: 2390, [line_b_key]: 3800},
			{name: 'Page G', [line_a_key]: 3490, [line_b_key]: 4300},
		];
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Promo Management</h1>
				</header>
				<div style={{display: 'flex', 'flex-direction': 'row', paddingTop: 70}}>
					<LineChart width={600} height={300} data={data}
							   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
						<XAxis dataKey="name">
							<Label value="Date" offset={0} position="insideBottom"/>
						</XAxis>
						<YAxis>
							<Label value="Sales (USD)" offset={0} angle={-90} position="insideLeft"/>
						</YAxis>
						<CartesianGrid strokeDasharray="3 3"/>
						<Tooltip/>
						<Legend/>
						<Line type="monotone" dataKey={line_a_key} stroke="#8884d8" activeDot={{r: 8}}/>
						<Line type="monotone" dataKey={line_b_key} stroke="#82ca9d"/>
					</LineChart>
					<div style={{width: 500, margin: 50}}>
						<div style={{marginTop: 30}}>
							% of discount
							<SliderWithTooltip tipFormatter={percentFormatter}/>
						</div>
						<div style={{paddingTop: 30}}>
							Time Frame: <input type="date"/>
						</div>
						<Link to="/report">
							<Button bsSize="large" bsStyle="primary" style={{marginTop: 30}}>
								Report Card
							</Button>
						</Link>
					</div>
				</div>
				<h1 className="App-title">External Factors</h1>
				<div style={{display: 'flex', 'flex-direction': 'row', paddingTop: 100}}>
					<LineChart width={400} height={300} data={data}
							   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
						<XAxis dataKey="name">
							<Label value="Date" offset={0} position="insideBottom"/>
						</XAxis>
						<YAxis>
							<Label value="Sales (USD)" offset={0} angle={-90} position="insideLeft"/>
						</YAxis>
						<CartesianGrid strokeDasharray="3 3"/>
						<Tooltip/>
						<Legend/>
						<Line type="monotone" dataKey={line_a_key} stroke="#8884d8" activeDot={{r: 8}}/>
					</LineChart>
					<LineChart width={400} height={300} data={data}
							   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
						<XAxis dataKey="name">
							<Label value="Date" offset={0} position="insideBottom"/>
						</XAxis>
						<YAxis>
							<Label value="Sales (USD)" offset={0} angle={-90} position="insideLeft"/>
						</YAxis>
						<CartesianGrid strokeDasharray="3 3"/>
						<Tooltip/>
						<Legend/>
						<Line type="monotone" dataKey={line_a_key} stroke="#8884d8" activeDot={{r: 8}}/>
					</LineChart>
					<LineChart width={400} height={300} data={data}
							   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
						<XAxis dataKey="name">
							<Label value="Date" offset={0} position="insideBottom"/>
						</XAxis>
						<YAxis>
							<Label value="Sales (USD)" offset={0} angle={-90} position="insideLeft"/>
						</YAxis>
						<CartesianGrid strokeDasharray="3 3"/>
						<Tooltip/>
						<Legend/>
						<Line type="monotone" dataKey={line_a_key} stroke="#8884d8" activeDot={{r: 8}}/>
					</LineChart>
				</div>
			</div>
		);
	}
}

function percentFormatter(v) {
	return `${v} %`;
}

export default App;
