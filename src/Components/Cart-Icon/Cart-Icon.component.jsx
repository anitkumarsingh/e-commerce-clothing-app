import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingCart } from '../../Assets/11.2 shopping-bag.svg.svg';
import {toggleCartHidden} from '../../Redux/Actions/Cart/cart';
import './Cart-Icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => {
	return (
		<div className='cart-icon' onClick={() => toggleCartHidden()}>
			<ShoppingCart className='shopping-icon' />
			<span className='item-count'>0</span>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(null, mapDispatchToProps)(CartIcon);
