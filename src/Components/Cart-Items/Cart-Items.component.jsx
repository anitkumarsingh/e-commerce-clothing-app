import './Cart-Items.styles.scss';

const CartItems = ({ items: { name, price, quantity, imageUrl } }) => {
	return (
		<div className='cart-item'>
			<img src={imageUrl} alt='Item' />
			<div className='item-details'>
				<span className='name'>{name}</span>
				<span className='price'>
					{quantity} x ${price}
				</span>
			</div>
		</div>
	);
};
export default CartItems;
