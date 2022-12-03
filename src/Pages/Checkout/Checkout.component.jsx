
import './Checkout.styles.scss';
import CheckoutItem from '../../Components/Checkout-Item/Checkout-Item.component';
import {CartContext} from '../../Provider/Cart'
import { useContext } from 'react';

const Checkout = () => {
	const {cartItems,cartTotalAmt} = useContext(CartContext);
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
				<span>Total:${cartTotalAmt}</span>
			</div>
		</div>
	);
};

export default Checkout;
