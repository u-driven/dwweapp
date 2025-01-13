import React from 'react';
import '../css/cardmain.css';

const CardMain = ({ item }) => {
	const { icon, name, description, scroll } = item;

	return (
		<div className="card-main" data-aos="fade-up" data-aos-delay={scroll}>
			<div className="card-main__container-icon">
				<div className="card-main__circle">
					<div className="card-main__icon">{icon}</div>
				</div>
			</div>
			<h3 className="card-main__title">{name}</h3>
			<p className="card-main__description">{description}</p>
		</div>
	);
};

export default CardMain;
