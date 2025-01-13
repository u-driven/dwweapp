import React, { useState } from 'react';
import { MdEmail as IconEmail } from 'react-icons/md';
import { BsFillPhoneFill as IconPhone } from 'react-icons/bs';
import { ImLocation as IconLocation } from 'react-icons/im';
import CardContactUs from './CardContactUs';
import TITLE from '../image/title-img.png';
import '../css/contactus.css';
import { Formik } from 'formik';

const ContactUs = () => {
	const DATA_CONTACT = [
		{
			name: 'PHONE',
			icon: <IconPhone />,
			contact: '+123-456-789',
			contact_2: '+333-222-111',
			id: 1,
			scroll: 150,
		},
		{
			name: 'EMAIL',
			icon: <IconEmail />,
			contact: 'tomasdeveloperfrontend@gmail.com',
			contact_2: 'tomas_aranda@gmail.com',
			id: 2,
			scroll: 300,
		},
		{
			name: 'ADDRESS',
			icon: <IconLocation />,
			contact: 'Buenos Aires, Argentina',
			contact_2: null,
			id: 3,
			scroll: 450,
		},
	];

	const [msgFormSend, setMsgFormSend] = useState(false);

	return (
		<div className="contact-us" id="contact">
			<div className="contact-us__container-text">
				<img alt="logo" className="contact-us__img" src={TITLE} />
				<h2 className="contact-us__title">CONTACT US</h2>
			</div>
			<div className="contact-us__responsive">
				<div className="contact-us__col-left" data-aos="flip-left" data-aos-delay="150">
					<div className="contact-us__container-imframe">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7809.302162904644!2d-58.3670212380798!3d-34.61915131851718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1650061127395!5m2!1ses-419!2sar"
							className="contact-us__imframe"
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="location"
						></iframe>
					</div>
				</div>
				<div className="contact-us__col-right">
					<div className="contact-us__container-cards">
						{DATA_CONTACT.map((item) => (
							<CardContactUs item={item} key={item.id} />
						))}
					</div>
					<div className="contact-us__container-form">
						<h3 className="contact-us__form-title">GET IN TOUCH</h3>
						<Formik
							initialValues={{
								name: '',
								email: '',
								number: '',
								message: '',
							}}
							onSubmit={(valores, { resetForm }) => {
								resetForm();
								setMsgFormSend(true);
								setTimeout(() => {
									setMsgFormSend(false);
								}, 5000);
							}}
							validate={(valores) => {
								let errores = {};

								const EX_REG_EMAIL =
									/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

								const EX_REG_NUMBER = /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;

								const EX_REG_LETTER = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

								if (!valores.name.trim()) {
									errores.name = 'the full name field cannot be empty';
								} else if (!EX_REG_LETTER.test(valores.name)) {
									errores.name = 'enter only letters';
								}

								if (!valores.email.trim()) {
									errores.correo = 'the email field cannot be empty';
								} else if (!EX_REG_EMAIL.test(valores.email)) {
									errores.correo = 'enter a valid email';
								}

								if (!valores.number.trim()) {
									errores.number = 'the number field cannot be empty';
								} else if (!EX_REG_NUMBER.test(valores.number)) {
									errores.number = 'enter a valid number';
								}

								if (!valores.message.trim()) {
									errores.message = 'do not leave the message field empty';
								}
								return errores;
							}}
						>
							{({ handleSubmit, handleChange, touched, errors, handleBlur, values }) => (
								<form
									className="contact-us__form"
									onSubmit={handleSubmit}
									data-aos="flip-right"
									data-aos-delay="150"
								>
									<input
										className="contact-us__input-full-name"
										name="name"
										placeholder="full name"
										value={values.name}
										autoComplete="off"
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{touched.name && errors.name && (
										<div className="contact-us__msg-error">{errors.name}</div>
									)}
									<input
										className="contact-us__input-email"
										placeholder="email"
										name="email"
										value={values.email}
										autoComplete="off"
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{touched.email && errors.correo && (
										<div className="contact-us__msg-error">{errors.correo}</div>
									)}
									<input
										className="contact-us__input-number"
										placeholder="number"
										name="number"
										value={values.number}
										onChange={handleChange}
										autoComplete="off"
										onBlur={handleBlur}
									/>
									{touched.number && errors.number && (
										<div className="contact-us__msg-error">{errors.number}</div>
									)}
									<input
										className="contact-us__input-message"
										placeholder="message"
										name="message"
										value={values.message}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{touched.message && errors.message && (
										<div className="contact-us__msg-error">{errors.message}</div>
									)}
									<button type="submit" className="contact-us__btn-send-message">
										Send Message
									</button>
									{msgFormSend ? (
										<div className="contact-us__msg-success">form sent successfully</div>
									) : null}
								</form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
