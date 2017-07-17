import React, { Component } from 'react';
import './App.css';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			'cb': true,
			'rb': 'one',
			'tg': true,
			'tf': 'text',
			'sf1': 'one',
			'sf2': ['two'],
			'dp': new Date(),
			'tp': new Date()
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(name) {
		var _this = this;
		return function(event, a, b) {
			if(typeof b === 'undefined') {
				_this.setState({[name]: a});
			} else {
				_this.setState({[name]: b});
			}
		}
	}

	render() {
		return (
			<div id="App">
				<div className="Input">
					<Checkbox
						label='Checkbox'
						value={this.state.cb} 
						onCheck={this.handleChange('cb')}
					/>
				</div>
				<div className="Input">
					<RadioButtonGroup
						name="rb" 
						defaultSelected={this.state.rb} 
						onChange={this.handleChange('rb')}
					>
						<RadioButton label="one" value="one" />
						<RadioButton label="two" value="two" />
					</RadioButtonGroup>
				</div>
				<div className="Input">
					<Toggle
						label="Toggle"
						defaultToggled={this.state.tg} 
						onToggle={this.handleChange('tg')}
					/>
				</div>
				<div className="Input">
					<TextField
						name="tf" 
						value={this.state.tf} 
						onChange={this.handleChange('tf')}
					/>
				</div>
				<div className="Input">
					<SelectField
						floatingLabelText="SelectField1"
						value={this.state.sf1} 
						onChange={this.handleChange('sf1')}
					>
						<MenuItem value={null} primaryText="" />
						<MenuItem value="one" primaryText="one" />
						<MenuItem value="two" primaryText="two" />
					</SelectField><br />
				</div>
				<div className="Input">
					<SelectField
						floatingLabelText="SelectField2"
						multiple={true}
						value={this.state.sf2} 
						onChange={this.handleChange('sf2')}
					>
						<MenuItem value="one" primaryText="one" />
						<MenuItem value="two" primaryText="two" />
					</SelectField>
				</div>
				<div className="Input">
					<DatePicker hintText="DatePicker" 
						value={this.state.dp} 
						onChange={this.handleChange('dp')}
					/>
				</div>
				<div className="Input">
					<TimePicker
						name="tp"
						value={this.state.tp} 
						onChange={this.handleChange('tp')}
					/>
				</div>
			</div>
		);
	}
}

export default App;
