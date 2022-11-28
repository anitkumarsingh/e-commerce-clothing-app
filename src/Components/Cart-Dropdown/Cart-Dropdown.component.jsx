import { connect } from 'react-redux';
import CartItems from '../Cart-Items/Cart-Items.component';
import CustomButton from '../Custom-Button/Custom-Button.component';
import './Cart-Dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
	console.log(cartItems);
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.map((item) => {
					return <CartItems items={item} key={item.id} />;
				})}
			</div>
			<CustomButton>CHECKOUT</CustomButton>
		</div>
	);
};
const mapStateToProps = (state) => ({
	cartItems: state.toggleCart.addItems
});
export default connect(mapStateToProps, null)(CartDropdown);
