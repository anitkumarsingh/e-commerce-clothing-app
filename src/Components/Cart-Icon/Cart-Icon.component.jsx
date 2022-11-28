import React from 'react';
import { ReactComponent as ShoppingCart} from '../../Assets/11.2 shopping-bag.svg.svg';
import './Cart-Icon.styles.scss';

const CartIcon = () =>{
  return(
    <div className='cart-icon'>
      <ShoppingCart className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon;