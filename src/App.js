import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {ProductContext} from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

console.log('cartcontext', CartContext);


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		console.log('item added to cart', item);
		setCart([...cart, item]);
		localStorage.setItem(item.title,JSON.stringify(item));
	};

	const removeItem = item => {
		console.log('removeItem triggered item: ', item)
		const updatedCart = cart.filter( book => book.id !== item.id );
		setCart(updatedCart);
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}} >
				<CartContext.Provider value={{cart, removeItem}} >
					<Navigation />
					<Route exact path="/" component={Products}/>
					<Route path="/cart" component={ShoppingCart}/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>

	);
}

export default App;
