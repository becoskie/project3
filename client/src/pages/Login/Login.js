import React, { Component } from 'react'
import "./Login.css";
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			shouldRedirectDashboard: false

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		console.log('sign-up-form, username: ');
		console.log(this.state.username);
		console.log(this.state.password)
		//request to server here
		axios.post('/user/login', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log("This is the response" + response.data)
				console.log(response)
				if (response.data) {
					console.log('successful Login')
					this.setState({
						shouldRedirectDashboard: true
					})
				} else {
						console.log('Sign-up error');
						
					}
			}).catch(error => {
				console.log('Sign up server error: ')
				console.log(error);
			})
	}
	render() {
		if(this.state.shouldRedirectDashboard) {
			return <Redirect to= "/dashboard"/>;
		}
		return (
			<div className="LoginForm">

				<form className="form-horizontal">
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="username">Username</label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								type="text"
								id="input-example-1"
								placeholder="Name"
								name="username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="password">Password: </label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								placeholder="Password"
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</div>

					</div>

					<div className="form-group ">
						<div className="col-7"></div>
						
							<button className="btn btn-primary col-1 col-mr-auto" onClick={this.handleSubmit}>Login</button>
						

					</div>
				</form>
			</div>

		)
	}
}

export default Login;
