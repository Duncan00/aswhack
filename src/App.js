import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './App.css';
import Slider, {Range, createSliderWithTooltip} from 'rc-slider';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label} from "recharts";
import 'rc-slider/assets/index.css';
import DatePicker from 'react-date-picker';
import moment from "moment";


const SliderWithTooltip = createSliderWithTooltip(Slider);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: moment(),
			percent: 90,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		const line_a_key = 'sum(SALES_AMOUNT)';
		const line_b_key = 'sum(SALES_AMOUNT * SUCCESS_RATE)';

		const health_care_key = 'Health Care';
		const medical_key = 'Medical';
		const temperature_key = 'Temperature';
		const flu_key = 'Flu';

		const data = [
			{
				name: '01/01/2018',
				[line_a_key]: 4000,
				[line_b_key]: 2400,
				[health_care_key]: 2400,
				[medical_key]: 2300,
				[temperature_key]: 15,
				[flu_key]: 1000
			},
			{
				name: '01/02/2018',
				[line_a_key]: 3000,
				[line_b_key]: 1398,
				[health_care_key]: 2098,
				[medical_key]: 1998,
				[temperature_key]: 7,
				[flu_key]: 1398
			},
			{
				name: '01/03/2018',
				[line_a_key]: 2000,
				[line_b_key]: 9800,
				[health_care_key]: 7800,
				[medical_key]: 6800,
				[temperature_key]: 15,
				[flu_key]: 900
			},
			{
				name: '01/04/2018',
				[line_a_key]: 2780,
				[line_b_key]: 3908,
				[health_care_key]: 2908,
				[medical_key]: 2908,
				[temperature_key]: 20,
				[flu_key]: 700
			},
			{
				name: '01/05/2018',
				[line_a_key]: 1890,
				[line_b_key]: 4800,
				[health_care_key]: 5400,
				[medical_key]: 5800,
				[temperature_key]: 23,
				[flu_key]: 400
			},
		];
		return (
			<div className="App">
				<header className="App-header">
					<img style={{height: 120}} src="http://www.avenuek.com.my/file/2016/06/ws-logo1.jpg"/>
				</header>
				<h1 style={{fontSize: 36}} className="App-title">Your Promotion Management Dashboard</h1>
				<div style={{
					display: 'flex',
					'flex-direction': 'row',
					'justify-content': 'space-around',
					paddingTop: 70
				}}>
					<div>
						<h1 style={{fontSize: 24}}>Sales (Medical)</h1>
						<LineChart width={600} height={300} data={data}
								   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
							<XAxis dataKey="name">
							</XAxis>
							<YAxis>
								<Label value="Sales (USD)" offset={0} angle={-90} position="insideLeft"/>
							</YAxis>
							<CartesianGrid strokeDasharray="3 3"/>
							<Tooltip/>
							<Legend/>
							<Line type="monotone" dataKey={line_a_key} stroke="#8884d8"/>
							<Line type="monotone" dataKey={line_b_key} stroke="#82ca9d"/>
						</LineChart>
					</div>
					<div style={{width: 500, margin: 50}}>
						<div style={{marginTop: 10}}>
							<p style={{fontSize: 18}}>Percentage of Discount <b>({this.state.percent}%)</b></p>
							<SliderWithTooltip onChange={(percent) => {
								this.setState({
									percent: percent
								});
							}} defaultValue={this.state.percent} tipFormatter={percentFormatter}/>
						</div>
						<div style={{paddingTop: 30}}>
							<p style={{fontSize: 18}}>Time Frame</p>
							<div style={{paddingTop: 30}}>
								From:
								<DatePicker
									selected={this.state.startDate}
									onChange={this.handleChange}
								/>
							</div>
							<div style={{paddingTop: 30}}>
								To:
								<DatePicker
									selected={this.state.startDate}
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</div>
				</div>
				<Link to="/report">
					<Button bsSize="large" bsStyle="primary" style={{marginTop: 30}}>
						Report Card
					</Button>
				</Link>

				<h1 style={{fontSize: 28, paddingTop: 50}} className="App-title">External Factors</h1>
				<div style={{display: 'flex', 'flex-direction': 'row', 'justify-content': 'space-around'}}>
					<div>
						<h1 style={{fontSize: 24}}>Google Trends</h1>
						<LineChart width={400} height={300} data={data}
								   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
							<XAxis dataKey="name">
							</XAxis>
							<YAxis>
								<Label value="No. of Searches" offset={0} angle={-90} position="insideLeft"/>
							</YAxis>
							<CartesianGrid strokeDasharray="3 3"/>
							<Tooltip/>
							<Legend/>
							<Line type="monotone" dataKey={health_care_key} stroke="#8884d8"/>
							<Line type="monotone" dataKey={medical_key} stroke="#82ca9d"/>
						</LineChart>
					</div>

					<div>
						<h1 style={{fontSize: 24}}>Tempature</h1>
						<LineChart width={400} height={300} data={data}
								   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
							<XAxis dataKey="name">
							</XAxis>
							<YAxis>
								<Label value="Temperature" offset={0} angle={-90} position="insideLeft"/>
							</YAxis>
							<CartesianGrid strokeDasharray="3 3"/>
							<Tooltip/>
							<Legend/>
							<Line type="monotone" dataKey={temperature_key} stroke="#8884d8"/>
						</LineChart>
					</div>
					<div>
						<h1 style={{fontSize: 24}}>Flu Season</h1>
						<LineChart width={400} height={300} data={data}
								   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
							<XAxis dataKey="name">
							</XAxis>
							<YAxis>
								<Label value="No. of flu" offset={0} angle={-90} position="insideLeft"/>
							</YAxis>
							<CartesianGrid strokeDasharray="3 3"/>
							<Tooltip/>
							<Legend/>
							<Line type="monotone" dataKey={flu_key} stroke="#8884d8"/>
						</LineChart>
					</div>
				</div>
			</div>
		);
	}

	handleChange(date) {
		this.setState({
			startDate: moment(date)
		});
	}
}

function percentFormatter(v) {
	return `${v} %`;
}

export default App;
