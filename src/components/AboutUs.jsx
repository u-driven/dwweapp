import React from 'react';
import BURGER_ABOUT_US from '../image/about-img.png';
import ABOUT_US from '../image/digi-marketing.png';
import TITLE from '../image/title-img.png';
import { FaCheck as IconCheck } from 'react-icons/fa';
import '../css/aboutus.css';

const AboutUs = () => {
	return (
		<section className="about-us" id='about'>
			<div className="about-us__container-text">
				{/*<img className="about-us__logo" src={TITLE} alt="logo" />*/}
				<h2 className="about-us__title">ABOUT US</h2>
			</div>
			<div className="about-us__container">
				<div className="about-us__col-left">
					<img
						className="about-us__img"
						src={ABOUT_US}
						alt="burger-about-us"
						data-aos="flip-left"
						data-aos-delay="150"
					/>
				</div>
				<div className="about-us__col-right" data-aos="flip-left" data-aos-delay="150">
					<h3 className="about-us__col-title">STEP INTO SMART DRIVEN</h3>
					<p className="about-us__col-subtitle">
						以 “You Driven” 為核心理念，我們始終相信：「由你啟動，為你改變。」每一位客戶都是我們創新與進步的動力來源。

						遊隼行銷致力於成為客戶最值得信賴的行銷夥伴，建立穩固的長期合作關係。我們專注於了解客戶需求，與您一同創造卓越的成功故事，實現雙贏的價值，攜手迎向數位行銷的新未來。

					</p>
					<div className="about-us__container-icons">
						<div className="about-us__icons-col-left">
							<div className="about-us__features">
								<IconCheck className="about-us__icon" />
								<span className="about-us__text">Best Price</span>
							</div>
							<div className="about-us__features">
								<IconCheck className="about-us__icon" />
								<span className="about-us__text">New Information </span>
							</div>
							<div className="about-us__features">
								<IconCheck className="about-us__icon" />
								<span className="about-us__text">Stay updated</span>
							</div>
						</div>
						<div className="about-us__icons-col-right">
							<div className="about-us__features">
								<IconCheck className="about-us__icon" />
								<span className="about-us__text">Best Service</span>
							</div>
							<div className="about-us__features">
								<IconCheck className="about-us__icon" />
								<span className="about-us__text">Tailored Platforms</span>
							</div>
							<div className="about-us__features">
								<IconCheck className="about-us__icon" />
								<span className="about-us__text">Omnichannel</span>
							</div>
						</div>
					</div>
					{/*<button className="about-us__btn">Read More</button>*/}
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
