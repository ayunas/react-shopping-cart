import React from 'react';
import { NavLink } from 'react-router-dom';
import {CartContext} from '../contexts/CartContext';



const Navigation = props => {

	const cartProps = React.useContext(CartContext);
	console.log(cartProps);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cartProps.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
