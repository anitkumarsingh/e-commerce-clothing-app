import { Switch, Route } from 'react-router-dom';
import Hats from '../Pages/Categories/Hats.component';
import Jackets from '../Pages/Categories/Jackets.component';
import Homepage from '../Pages/Home/Homepage.component';

const MainRouter = () => (
	<Switch>
		<Route exact path='/' component={Homepage} />
		<Route path='/hats' component={Hats} />
		<Route path='/jackets' component={Jackets} />
	</Switch>
);

export default MainRouter;
