import React from 'react';
import '../css/cardmenu.css';
import { AiFillStar as IconStar } from 'react-icons/ai';

const CardMenu = ({ item, handleClickAddCart }) => {
	const { name, price, img, stars, scroll, id } = item;

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
		<div className="card-menu" data-aos="fade-up" data-aos-delay={scroll}>
			<div className="card-menu__container-card">
				<img src={img} className="card-menu__img" alt="burger" />
				<div className="card-menu__container-stars">{STARS[stars].map((item) => item)}</div>
				<h3 className="card-menu__name">{name}</h3>
				<span className="card-menu__price">$ {price}</span>
				<button className="card-menu__btn" onClick={() => handleClickAddCart(item, id)}>
					Add To Cart
				</button>
			</div>
		</div>
	);
};

export default CardMenu;
