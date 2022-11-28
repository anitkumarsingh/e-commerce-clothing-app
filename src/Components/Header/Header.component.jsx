import './Header.styles.scss';
import { ReactComponent as Logo } from '../../Assets/logo.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../Cart-Icon/Cart-Icon.component';
import CartDropdown from '../Cart-Dropdown/Cart-Dropdown.component';
import toggleCartHidden from '../../Redux/Actions/Cart/cart';

const Header = ({ signInUser, cartStatus }) => {
	console.log('header', cartStatus);
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
			{cartStatus && <CartDropdown />}
		</div>
	);
};

const mapStateToProps = (state) => ({
	signInUser: state.user.currentUser,
	cartStatus: state.toggleCart.hidden
});

export default connect(mapStateToProps)(Header);
