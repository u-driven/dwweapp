import React from 'react';
import '../css/cardcontactus.css';

const CardContactUs = ({ item }) => {
	const { name, contact, icon, contact_2, scroll } = item;

	return (
		<div className="card-contact-us" data-aos="fade-up" data-aos-delay={scroll}>
			<div className="card-contact-us___container-icon">{icon}</div>
			<h3 className="card-contact-us___name">{name}</h3>
			<span className="card-contact-us___contact-one">{contact}</span>
			{contact_2 === null ? null : <div className="card-contact-us___contact-two">{contact_2}</div>}
		</div>
	);
};

export default CardContactUs;
