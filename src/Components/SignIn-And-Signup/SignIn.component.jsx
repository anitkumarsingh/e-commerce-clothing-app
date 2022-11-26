import React from 'react';
import FormInput from '../Form-Input/Form-Input.component';
import './SignIn.styles.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		
	}
  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };
  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };
	render() {
		const { email, password } = this.state;
		return (
			<div className='sign-in'>
				<h1>I have already account</h1>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.onSubmitHandler}>
					<FormInput
						type='email'
						id='email'
						required
						value={email}
						name='email'
            label='Email'
						onChange={this.onChangeHandler}
					/>
					<FormInput
						type='password'
						id='password'
						required
						value={password}
						name='password'
            label='Password'
						onChange={this.onChangeHandler}
					/>
					
					<input type='submit' value='Sign In' />
				</form>
			</div>
		);
	}
}
export default SignIn;
