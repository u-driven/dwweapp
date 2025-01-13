import React from 'react';
import '../css/carddailypost.css';
import { AiFillCalendar } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';

const CardDailyPosts = ({ item }) => {
	const { name, description, img, scroll } = item;
	return (
		<div className="card-daily-post" data-aos="fade-up" data-aos-delay={scroll}>
			<div className="card-daily-post__container-img">
				<img className="card-daily-post__img" src={img} alt="card_daily-post" />
				<div className="card-daily-post__hover-container">
					<div className="card-daily-post__row-one">
						<AiFillCalendar className="card-daily-post__icon-hover" />
						<span>21st May 2022</span>
					</div>
					<div className="card-daily-post__row-two">
						<FaUser className="card-daily-post__icon-hover" />
						<span>By Admin</span>
					</div>
				</div>
			</div>
			<h3 className="card-daily-post__name">{name}</h3>
			<p className="card-daily-post__description">{description}</p>
			<button className="card-daily-post__btn">Read More</button>
		</div>
	);
};

export default CardDailyPosts;
