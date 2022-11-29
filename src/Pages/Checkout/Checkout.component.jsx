import { connect } from 'react-redux';
import './Checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../Redux/Selectors/Cart';
import CheckoutItem from '../../Components/Checkout-Item/Checkout-Item.component';

const Checkout = ({ cartItems, total }) => {
	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((item) => {
				return(<CheckoutItem key={item.id} cartItem={item} />)
			})}
			<div className='total'>
				<span>Total:${total}</span>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});
export default connect(mapStateToProps, null)(Checkout);