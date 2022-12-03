import './Checkout-Item-styles.scss';
import {CartContext} from '../../Provider/Cart';
import { useContext } from 'react';

const CheckoutItem = ({ cartItem }) => {
	const { name, quantity, price, imageUrl } = cartItem;
	const {addItem,removeItem,clearItems} = useContext(CartContext);
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='product-pic' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className='price'>{price}</span>
			<div className='remove-button' onClick={() => clearItems(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};


export default CheckoutItem;
