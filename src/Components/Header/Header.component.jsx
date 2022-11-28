import './Header.styles.scss';
import { ReactComponent as Logo } from '../../Assets/logo.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.utils';
import { connect } from 'react-redux';

const Header = ({ signInUser }) => {
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
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	signInUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
