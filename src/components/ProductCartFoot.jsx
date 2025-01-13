import React from 'react';
import '../css/productcartfoot.css';
import { FiDelete as IconDelete } from 'react-icons/fi';

const ProductCartFoot = ({ item, deleteAmountProduct, filterProduct }) => {
	const { name, price, img, id, amount } = item;
	let REMOVE_DIGIT = `${price * amount}`.indexOf('.');
	let ADD_PRICE = `${price * amount}`;
	return (
		<div className="product-cart-foot">
			<div className="product-cart-foot__container-img">
				<img className="product-cart-foot__img" src={img} alt={name + id} />
			</div>
			<h4 className="product-cart-foot__name">
				<span>{amount === 0 ? filterProduct() : amount + ' '}</span> x {' ' + name}
			</h4>
			<p className="product-cart-foot__price">{'$ ' + ADD_PRICE.slice(0, REMOVE_DIGIT + 3)}</p>
			<IconDelete
				className="product-cart-foot__delete-product"
				onClick={() => deleteAmountProduct(id)}
			/>
		</div>
	);
};

export default ProductCartFoot;
