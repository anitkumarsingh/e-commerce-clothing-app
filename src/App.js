import React from 'react';
import MainRouter from './Router';
import { auth } from './Firebase/Firebase.utils';
import './App.styles.scss';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/Actions/User/user';

class App extends React.Component {
	unSubcribeFromAuth = null;
	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unSubcribeFromAuth = auth.onAuthStateChanged((user) => {
			console.log(user)
			setCurrentUser(user)
		});
	}
	componentWillUnmount() {
		this.unSubcribeFromAuth();
	}

	render() {
		return <MainRouter  />;
	}
}

const mapDispatchToProps = (dispatch)=>({
	setCurrentUser:user =>dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
