import React, { useContext } from 'react';
import { ReactComponent as ShoppingCart } from '../../Assets/11.2 shopping-bag.svg.svg';
import './Cart-Icon.styles.scss';
import { CartContext } from '../../Provider/Cart';

const CartIcon = ( ) => {
	const { toggleHidden,cartItemsCount } = useContext(CartContext);
	return (
		<div className='cart-icon' onClick={() => toggleHidden()}>
			<ShoppingCart className='shopping-icon' />
			<span className='item-count'>{cartItemsCount}</span>
		</div>
	);
};

export default CartIcon;
