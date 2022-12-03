import React, { useState, useEffect, createContext } from 'react';
import { addItemToCart, filterItemsFromCart, getCartItemsCount, getCartItemsTotalAmt, removeItemCart } from '../Utility/Cart';

export const CartContext = createContext({
	hidden: true,
	toggleHidden: () => {},
	cartItems: [],
	addItem: () => {},
	removeItem: () => {},
	clearItems: () => {},
	cartItemsCount: 0,
  cartTotalAmt:0
});

const CartProvider = ({ children }) => {
	const [hidden, setHidden] = useState(true);
	const [cartItems, setCartItems] = useState([]);
	const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotalAmt,setCartTotalAmt] = useState(0);

	const toggleHidden = () => setHidden(!hidden);
	const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
	const removeItem = (item) => setCartItems(removeItemCart(cartItems, item));
	const clearItems = (item) => setCartItems(filterItemsFromCart(cartItems, item));

  useEffect(()=>{
     setCartItemsCount(getCartItemsCount(cartItems));
     setCartTotalAmt(getCartItemsTotalAmt(cartItems));
  },[cartItems])

	return (
		<CartContext.Provider
			value={{
				hidden,
				toggleHidden,
				cartItems,
				addItem,
				removeItem,
				clearItems,
				cartItemsCount,
        cartTotalAmt
			}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
