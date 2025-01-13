import React from 'react';
import '../css/footer.css';
import { FaReact } from 'react-icons/fa';
const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="footer__col-one">
					<a href="#home" className="footer__home">
						Home
					</a>
					<a href="#about" className="footer__about">
						About
					</a>
					<a href="#contact" className="footer__contact">
						Contact
					</a>
				</div>
				<div className="footer__col-two">
					<a href="#menu" className="footer__menu">
						Menu
					</a>
					<a href="#review" className="footer__reviews">
						Reviews
					</a>
					<a href="#blog" className="footer__blogs">
						Blogs
					</a>
				</div>
			</div>
			<div className="footer__creator">
				<p className="footer__text">
					Create By <span className="footer__name">UDriven</span>
				</p>
			</div>
		</>
	);
};

export default Footer;
