import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './App.css';
import Slider, {Range, createSliderWithTooltip} from 'rc-slider';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import 'rc-slider/assets/index.css';

const SliderWithTooltip = createSliderWithTooltip(Slider);

class App extends Component {
	render() {
		const data = [
			{name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
			{name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
			{name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
			{name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
			{name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
			{name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
			{name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
		];
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Promo Management</h1>
				</header>
				<p className="App-intro">

				</p>
				<div style={{display: 'flex', 'flex-direction': 'row'}}>
					<LineChart width={600} height={300} data={data}
							   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
						<XAxis dataKey="name"/>
						<YAxis/>
						<CartesianGrid strokeDasharray="3 3"/>
						<Tooltip/>
						<Legend/>
						<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
						<Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
					</LineChart>
					<div style={{width: 500, margin: 50}}>
						<div style={{marginTop: 30}}>
							% of discount
							<SliderWithTooltip tipFormatter={percentFormatter}/>
						</div>
						<div style={{marginTop: 30}}>
							% of discount
							<SliderWithTooltip tipFormatter={percentFormatter}/>
						</div>
						<Link to="/report">
							<Button bsSize="large" bsStyle="primary" style={{marginTop: 30}}>
								Report Card
							</Button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

function percentFormatter(v) {
	return `${v} %`;
}

export default App;
