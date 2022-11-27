import { Switch, Route } from 'react-router-dom';
import Header from '../Components/Header/Header.component';
import Homepage from '../Pages/Home/Homepage.component';
import Shop from '../Pages/Shop/Shop.component';
import SignInAndSignUP from '../Pages/Sign-in-and-Signup/Sign-in-and-Signup.component';

const MainRouter = ({currentUser}) => (
	<>
		<Header signInUser={currentUser}/>
		<Switch>
			<Route exact path='/' component={Homepage} />
			<Route path='/shop' component={Shop} />
			<Route path='/sign' component={SignInAndSignUP} />
		</Switch>
	</>
);

export default MainRouter;
