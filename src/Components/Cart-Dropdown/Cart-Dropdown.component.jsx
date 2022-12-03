import { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import CartItems from '../Cart-Items/Cart-Items.component';
import CustomButton from '../Custom-Button/Custom-Button.component';
import { CartContext } from '../../Provider/Cart';
import './Cart-Dropdown.styles.scss';


const CartDropdown = ({ history }) => {
	const { cartItems, toggleHidden } = useContext(CartContext);
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map((item) => {
						return <CartItems items={item} key={item.id} />;
					})
				) : (
					<span className='empty-message'>Your Cart Is Empty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push('/checkout');
					toggleHidden();
				}}>
				CHECKOUT
			</CustomButton>
		</div>
	);
};

export default withRouter(CartDropdown);
