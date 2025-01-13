import React from 'react';
import TITLE from '../image/title-img.png';
import '../css/customersreviews.css';
import CUSTOMER_1 from '../image/pic-1.png';
import CUSTOMER_2 from '../image/pic-2.png';
import CUSTOMER_3 from '../image/pic-3.png';
import Customers from './Customers';

const CustomersReviews = () => {
	const DATA_CUSTOMERS = [
		{
			name: 'JHON DEO',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.',
			img: CUSTOMER_1,
			stars: 4,
			id: 1,
			scroll: 150,
		},
		{
			name: 'JHON DEO',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.',
			img: CUSTOMER_2,
			stars: 5,
			id: 2,
			scroll: 300,
		},
		{
			name: 'JHON DEO',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.',
			img: CUSTOMER_3,
			stars: 4,
			id: 3,
			scroll: 450,
		},
	];

	return (
		<div className="customers-reviews" id="review">
			<div className="customers-reviews__container-text">
				<img src={TITLE} className="customers-reviews__img" alt="logo" />
				<h2 className="customers-reviews__title">CUSTOMERS REVIEWS</h2>
			</div>
			<div className="customers-reviews__container-customers">
				{DATA_CUSTOMERS.map((item) => (
					<Customers item={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default CustomersReviews;
