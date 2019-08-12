import React from 'react';

// Components
import Product from './Product';
import {ProductContext} from '../contexts/ProductContext';
// console.log(ProductContext, 'producctcontext');


const Products = () => {

	const contextProps = React.useContext(ProductContext);
	return (
		<div className="products-container">
			{contextProps.products.map(product => {
				return <Product key={product.id} product={product}/>
			})}
			{/* {props.products.map(product => (
				<Product
					key={product.id}
					product={product}
					// addItem={props.addItem}
				/>
			))} */}
		</div>
	);
};

export default Products;
