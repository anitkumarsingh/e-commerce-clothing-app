import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Components/Header/Header.component';
import Homepage from '../Pages/Home/Homepage.component';
import Shop from '../Pages/Shop/Shop.component';
import SignInAndSignUP from '../Pages/Sign-in-and-Signup/Sign-in-and-Signup.component';
import { connect } from 'react-redux';

const MainRouter = ({ currentUser }) => {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route path='/shop' component={Shop} />
				<Route
					exact
					path='/sign'
					render={() => (currentUser ? <Redirect to='/' /> : <SignInAndSignUP />)}
				/>
			</Switch>
		</>
	);
};

const mapStateToProps = (state) => ({ currentUser: state.user.currentUser });

export default connect(mapStateToProps, null)(MainRouter);
