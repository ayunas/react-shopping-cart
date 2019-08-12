import React from 'react';
import {CartContext} from '../contexts/CartContext'


// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const cartProps = React.useContext(CartContext);
	console.log(cartProps,'cartProps in ShoppingCart');


	const getCartTotal = () => {
		return cartProps.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cartProps.cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
