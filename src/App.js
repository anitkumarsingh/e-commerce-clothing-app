import React from 'react';
import MainRouter from './Router';
import { auth } from './Firebase/Firebase.utils';
import './App.styles.scss';
import { CurrentUser } from './Context/Current-User/Current-User';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state={
			currentUser:null
		}
	}
	
	unSubcribeFromAuth = null;
	componentDidMount() {
		this.unSubcribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({currentUser:user});
		});
	}
	componentWillUnmount() {
		this.unSubcribeFromAuth();
		this.setState({currentUser:this.unSubcribeFromAuth()})
	}

	render() {
		const {currentUser} = this.state;
		return (
			<CurrentUser.Provider value={currentUser}>
				<MainRouter />
			</CurrentUser.Provider>
		);
	}
}

export default App;
