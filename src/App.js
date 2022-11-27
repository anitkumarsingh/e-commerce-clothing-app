import React from 'react';
import MainRouter from './Router';
import { auth } from './Firebase/Firebase.utils';
import './App.styles.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		};
	}
	unSubcribeFromAuth = null;
	componentDidMount() {
		this.unSubcribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
		});
	}
	componentWillUnmount() {
		this.unSubcribeFromAuth();
	}

	render() {
		return <MainRouter />;
	}
}

export default App;
