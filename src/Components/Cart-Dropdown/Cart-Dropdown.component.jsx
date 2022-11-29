import { connect } from 'react-redux';
import { selectCartItems } from '../../Redux/Selectors/Cart';
import CartItems from '../Cart-Items/Cart-Items.component';
import CustomButton from '../Custom-Button/Custom-Button.component';
import './Cart-Dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
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
	cartItems: selectCartItems(state)
});
export default connect(mapStateToProps, null)(CartDropdown);
