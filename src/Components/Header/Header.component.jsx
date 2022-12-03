import './Header.styles.scss';
import { ReactComponent as Logo } from '../../Assets/logo.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../Cart-Icon/Cart-Icon.component';
import CartDropdown from '../Cart-Dropdown/Cart-Dropdown.component';
import { selectCurrentUser } from '../../Redux/Selectors/User';
import { selectHiddenCartStatus } from '../../Redux/Selectors/Cart';
import { createStructuredSelector } from 'reselect';
import { useContext } from 'react';
import { CurrentUser } from '../../Context/Current-User/Current-User';
import { CartContext } from '../../Context/Cart/Cart';

const Header = ({ cartStatus }) => {
	const signInUser = useContext(CurrentUser);
	const {hidden} = useContext(CartContext);
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					Shop
				</Link>
				<Link className='option' to='/shop'>
					Contact
				</Link>
				{signInUser ? (
					<div className='option' onClick={() => auth.signOut()}>
						Sign Out
					</div>
				) : (
					<Link className='option' to='/sign'>
						Sign In
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden && <CartDropdown />}
		</div>
	);
};

const mapStateToProps = (state) => ({
	signInUser: selectCurrentUser(state),
	cartStatus: selectHiddenCartStatus(state)
});

// 2nd more efficient method
const mapStateToProps1 = createStructuredSelector({
	signInUser: selectCurrentUser,
	cartStatus: selectHiddenCartStatus
});

export default connect(mapStateToProps1)(Header);
