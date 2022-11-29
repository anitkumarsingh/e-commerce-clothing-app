import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../Redux/Selectors/Cart';
import CartItems from '../Cart-Items/Cart-Items.component';
import CustomButton from '../Custom-Button/Custom-Button.component';
import './Cart-Dropdown.styles.scss';

const CartDropdown = ({ cartItems,history }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
	      {cartItems.length ? (cartItems.map((item) => {
					return <CartItems items={item} key={item.id} />;
				})):(<span className='empty-message'>Your Cart Is Empty</span>)}
			</div>
			<CustomButton onClick={()=>history.push('/checkout')}>CHECKOUT</CustomButton>
		</div>
	);
};
const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state)
});
export default withRouter(connect(mapStateToProps, null)(CartDropdown));
