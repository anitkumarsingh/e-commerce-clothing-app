import { connect } from 'react-redux';
import { removeItemFromCart } from '../../Redux/Actions/Cart/cart';
import './Checkout-Item-styles.scss';

const CheckoutItem = ({ cartItem, clearItem }) => {
	const { name, quantity, price, imageUrl } = cartItem;
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='product-pic' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>{quantity}</span>
			<span className='price'>{price}</span>
			<div className='remove-button' onClick={() => clearItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(removeItemFromCart(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
