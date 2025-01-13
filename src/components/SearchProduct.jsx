import React from 'react';
import { FaSearch as IconSearch } from 'react-icons/fa';

const SearchProduct = ({ item }) => {
	const { name, img, id } = item;
	return (
		<div className="search-product">
			<IconSearch className="search-product__icon" />
			<img src={img} alt={name + id} />
			<h3>{name}</h3>
		</div>
	);
};

export default SearchProduct;
