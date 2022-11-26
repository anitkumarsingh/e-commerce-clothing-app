import { Switch, Route } from 'react-router-dom';
import Header from '../Components/Header/Header.component';
import Homepage from '../Pages/Home/Homepage.component';
import Shop from '../Pages/Shop/Shop.component';

const MainRouter = () => (
	<>
		<Header />
		<Switch>
			<Route exact path='/' component={Homepage} />
			<Route path='/shop' component={Shop} />
		</Switch>
	</>
);

export default MainRouter;
