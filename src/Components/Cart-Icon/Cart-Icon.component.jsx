import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingCart } from '../../Assets/11.2 shopping-bag.svg.svg';
import { selectCartItemsCount } from '../../Redux/Selectors/Cart';
import './Cart-Icon.styles.scss';
import { CartContext } from '../../Context/Cart/Cart';

const CartIcon = ({ countItems }) => {
	const {toggleHidden} = useContext(CartContext);
	return (
		<div className='cart-icon' onClick={() => toggleHidden()}>
			<ShoppingCart className='shopping-icon' />
			<span className='item-count'>{countItems}</span>
		</div>
	);
};


const mapStateToProps = (state) => ({
	countItems: selectCartItemsCount(state)
});

export default connect(mapStateToProps)(CartIcon);
