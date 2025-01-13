import React from 'react';
import '../css/customers.css';
import { AiFillStar as IconStar } from 'react-icons/ai';

const Customers = ({ item }) => {
	const { name, description, stars, img, scroll } = item;

	const STARS = [
		[],
		[<IconStar key={name + ' 1-1'} />],
		[<IconStar key={name + ' 2-1'} />, <IconStar key={name + ' 2-2'} />],
		[
			<IconStar key={name + ' 3-1'} />,
			<IconStar key={name + ' 3-2'} />,
			<IconStar key={name + ' 3-3'} />,
		],
		[
			<IconStar key={name + ' 4-1'} />,
			<IconStar key={name + ' 4-2'} />,
			<IconStar key={name + ' 4-3'} />,
			<IconStar key={name + ' 4-4'} />,
		],
		[
			<IconStar key={name + ' 5-1'} />,
			<IconStar key={name + ' 5-2'} />,
			<IconStar key={name + ' 5-3'} />,
			<IconStar key={name + ' 5-4'} />,
			<IconStar key={name + ' 5-5'} />,
		],
	];

	return (
		<div className="customers" data-aos="fade-up" data-aos-delay={scroll}>
			<img className="customers__img" src={img} alt="customers" />
			<h3 className="customers__name">{name}</h3>
			<p className="customers__description">{description}</p>
			<div className="customers__containers-stars">{STARS[stars].map((item) => item)}</div>
		</div>
	);
};

export default Customers;
