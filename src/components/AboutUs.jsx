import React from 'react';
import BURGER_ABOUT_US from '../image/about-img.png';
import TITLE from '../image/title-img.png';
import { FaCheck as IconCheck } from 'react-icons/fa';
import '../css/aboutus.css';

const AboutUs = () => {
	return (
		<section className="about-us" id='about'>
			<div className="about-us__container-text">
				<img className="about-us__logo" src={TITLE} alt="logo" />
				<h2 className="about-us__title">ABOUT US</h2>
			</div>
			<div className="about-us__container">
				<div className="about-us__col-left">
					<img
						className="about-us__img"
						src={BURGER_ABOUT_US}
						alt="burger-about-us"
						data-aos="flip-left"
						data-aos-delay="150"
					/>
				</div>
				<div className="about-us__col-right" data-aos="flip-left" data-aos-delay="150">
					<h3 className="about-us__col-title">STEP INTO BURGER HEAVEN</h3>
					<p className="about-us__col-subtitle">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor incididu
					</p>
					<div className="about-us__container-icons">
						<div className="about-us__icons-col-left">
							<div className="about-us__features">
								<IconCheck className="about-us__icon" />
								<span className="about-us__text">Best Price</span>
							</div>
							<div className="about-us__features">
								<IconCheck className="about-us__icon" />
								<span className="about-us__text">Fresh Ingredient</span>
							</div>
							<div className="about-us__features">
								<IconCheck className="about-us__icon" />
								<span className="about-us__text">Natural Cheese</span>
							</div>
						</div>
						<div className="about-us__icons-col-right">
							<div className="about-us__features">
								<IconCheck className="about-us__icon" />
								<span className="about-us__text">Best Service</span>
							</div>
							<div className="about-us__features">
								<IconCheck className="about-us__icon" />
								<span className="about-us__text">Backed Buns</span>
							</div>
							<div className="about-us__features">
								<IconCheck className="about-us__icon" />
								<span className="about-us__text">Vog & Non-Veg</span>
							</div>
						</div>
					</div>
					<button className="about-us__btn">Read More</button>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
