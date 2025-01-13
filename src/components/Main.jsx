import React from 'react';
import '../css/main.css';
import BURGER_MAIN from '../image/burger-baner.png';
import CardMain from './CardMain';
import { FaHamburger, FaHeadset, FaTruck } from 'react-icons/fa';

const Main = () => {
	const DATA_CARD_MAIN = [
		{
			name: 'BEST QUALITY',
			icon: <FaHamburger />,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
			id: 1,
			scroll: 150,
		},
		{
			name: '24/7 SERVICE',
			icon: <FaHeadset />,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
			id: 2,
			scroll: 300,
		},
		{
			name: 'FREE DELIVERY',
			icon: <FaTruck />,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
			id: 3,
			scroll: 450,
		},
	];

	return (
		<main className="main" id="home">
			<div className="main__container-img">
				<img
					className="main__img"
					src={BURGER_MAIN}
					alt="burger-main"
					data-aos="fade-up"
					data-aos-delay="150"
				/>
			</div>
			<div className="main__container-text">
				<h1 className="main__title" data-aos="fade-up" data-aos-delay="300">
					SO MEATY YOU'LL GO CRAZY
				</h1>
				<p className="main__subtitle" data-aos="fade-up" data-aos-delay="450">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididu
				</p>
			</div>
			<div className="main__container-card"></div>
			<div className="main__container-cards">
				{DATA_CARD_MAIN.map((item) => (
					<CardMain item={item} key={item.id} />
				))}
			</div>
		</main>
	);
};

export default Main;
