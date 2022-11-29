import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingCart } from '../../Assets/11.2 shopping-bag.svg.svg';
import { toggleCartHidden } from '../../Redux/Actions/Cart/cart';
import { selectCartItemsCount } from '../../Redux/Selectors/Cart';
import './Cart-Icon.styles.scss';

const CartIcon = ({ toggleCartHidden, countItems }) => {
	return (
		<div className='cart-icon' onClick={() => toggleCartHidden()}>
			<ShoppingCart className='shopping-icon' />
			<span className='item-count'>{countItems}</span>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
	countItems: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
