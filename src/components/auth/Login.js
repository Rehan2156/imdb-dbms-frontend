import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { COLORS } from '../../colors';

const Login = () => {
	const [ alert, setAlert ] = useState(false);
	const [ state, setState ] = useState({
		name: '',
		email: '',
		password: '',
		loginData: { email: '', password: '' }
	});

	const setLocalData = (data) => {
		localStorage.setItem(
			'user',
			JSON.stringify({ id: data.message.userId, email: state.loginData.email, admin: data.message.admin })
		);
	};

	const handleSubmit = () => {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		fetch('https://mesmovies.herokuapp.com/sign-in', {
			method: 'POST',
			mode: 'cors',
			headers,
			body: JSON.stringify(state.loginData)
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.status >= 200 && res.status < 205) {
					setAlert(true);
					setLocalData(res);
					window.location.reload();
				} else {
				}
			});
	};

	const handleChange = (input, evt) => {
		const value = evt.target.value;
		const loginData = state.loginData;
		loginData[input] = value;
		setState({
			...state,
			[evt.target.name]: value,
			loginData: loginData
		});
	};

	return (
		<React.Fragment>
			{alert ? (
				<Alert variant="success">You are logged in successfully!</Alert>
			) : (
				<Container className="justify-content-center">
					<Row>
						<Col>
							<Form.Label>Email</Form.Label>
							<Form.Control
								onChange={(e) => handleChange('email', e)}
								placeholder="Enter email"
								defaultValue={state.email}
							/>
						</Col>
					</Row>
					<Row className="mt-3">
						<Col>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								onChange={(e) => handleChange('password', e)}
								placeholder="Enter password"
								defaultValue={state.password}
							/>
						</Col>
					</Row>
					<Row className="justify-content-end mt-3">
						<Button
							disableElevation
							variant="contained"
							style={{ background: COLORS.primary, color: COLORS.textOnPrimary }}
							onClick={() => handleSubmit()}
						>
							Submit
						</Button>
					</Row>
				</Container>
			)}
		</React.Fragment>
	);
};

export default Login;
