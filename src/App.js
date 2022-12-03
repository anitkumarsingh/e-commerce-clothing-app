import React from 'react';
import MainRouter from './Router';
import { auth } from './Firebase/Firebase.utils';
import './App.styles.scss';
import { CurrentUser } from './Context/Current-User/Current-User';
import { CartContext } from './Context/Cart/Cart';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null,
			hidden: true
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
		this.setState({ currentUser: this.unSubcribeFromAuth() });
	}

	render() {
		const { currentUser, hidden } = this.state;
		const toggleHidden = () => this.setState({ hidden: !this.state.hidden });
		return (
			<CurrentUser.Provider value={currentUser}>
				<CartContext.Provider value={{ hidden, toggleHidden }}>
					<MainRouter />
				</CartContext.Provider>
			</CurrentUser.Provider>
		);
	}
}

export default App;
