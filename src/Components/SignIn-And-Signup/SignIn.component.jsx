import React from 'react';
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
			<>
				<h1>Sign In</h1>
				<span>Already have account please sign in</span>
				<form onSubmit={this.onSubmitHandler}>
        <label htmlFor='email'>Email</label>
					<input
						type='email'
						id='email'
						required
						value={email}
						name='email'
						onChange={this.onChangeHandler}
					/>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						required
						value={password}
						name='password'
						onChange={this.onChangeHandler}
					/>
					
					<input type='submit' value='Sign In' />
				</form>
			</>
		);
	}
}
export default SignIn;
