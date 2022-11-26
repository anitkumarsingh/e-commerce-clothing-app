import { Switch, Route } from 'react-router-dom';
import Homepage from '../Pages/Home/Homepage.component';

const HatsPage = () => {
	return (
		<>
			<h1>HatsPage</h1>
			<h4>asdasdasd</h4>
		</>
	);
};

const MainRouter = () => (
	<Switch>
		<Route exact path='/' component={Homepage} />
		<Route path='/hats' component={HatsPage} />
	</Switch>
);

export default MainRouter;
