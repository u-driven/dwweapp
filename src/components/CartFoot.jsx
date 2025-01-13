import React, { useEffect, useState } from 'react';
import '../css/cartfoot.css';
import ProductCartFoot from './ProductCartFoot';

const CartFoot = ({ clickCartFood, cartFood, deleteAmountProduct, filterProduct }) => {
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const priceTotal = cartFood.reduce((acc, current) => acc + current.amount * current.price, 0);
		return setTotal(priceTotal);
	}, [cartFood]);

	let REMOVE_DIGIT = `${total}`.indexOf('.');

	return (
		<div className={clickCartFood ? 'cart-foot__appear' : 'cart-foot__hide'}>
			<div className="cart-foot__container-title">
				<h3 className="cart-foot__title">Cart</h3>
			</div>
			<div className="cart-foot__container-cart">
				{cartFood.map((item) => (
					<ProductCartFoot
						item={item}
						key={item.id}
						deleteAmountProduct={deleteAmountProduct}
						filterProduct={filterProduct}
					/>
				))}
			</div>
			<div className="cart-foot__container-total">
				<p>Total $ {`${total}`.slice(0, REMOVE_DIGIT + 3)} </p>
				<button>To Pay</button>
			</div>
		</div>
	);
};

export default CartFoot;
