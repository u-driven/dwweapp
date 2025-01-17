import React, { useState } from 'react';
import { MdEmail as IconEmail } from 'react-icons/md';
import { BsFillPhoneFill as IconPhone } from 'react-icons/bs';
import { ImLocation as IconLocation } from 'react-icons/im';
import CardContactUs from './CardContactUs';
import TITLE from '../image/title-img.png';
import '../css/contactus.css';
import { Formik, Form, Field } from 'formik';
import emailjs, {send} from '@emailjs/browser'

const ContactUs = () => {
	const DATA_CONTACT = [
		// {
		// 	name: 'PHONE',
		// 	icon: <IconPhone />,
		// 	contact: '+123-456-789',
		// 	contact_2: '+333-222-111',
		// 	id: 1,
		// 	scroll: 150,
		// },
		{
			name: 'EMAIL',
			icon: <IconEmail />,
			contact: 'cs@udriventw.com',
			contact_2: null,
			id: 2,
			scroll: 300,
		},
		// {
		// 	name: 'ADDRESS',
		// 	icon: <IconLocation />,
		// 	contact: 'Buenos Aires, Argentina',
		// 	contact_2: null,
		// 	id: 3,
		// 	scroll: 450,
		// },
	];

	const [msgFormSend, setMsgFormSend] = useState(false);

	const handleSubmit = (values, { resetForm }) => {
		// Integrate EmailJS
		emailjs
			.send(
				'service_umgacpnudriven', // Replace with your EmailJS service ID
				'template_k4kuvcu', // Replace with your EmailJS template ID
				values,
				'UiLCtKeHa1D2Iw0SO' // Replace with your EmailJS user ID
			)
			.then(
				() => {
					setMsgFormSend(true);
					resetForm();
					setTimeout(() => {
						setMsgFormSend(false);
					}, 5000);
				},
				(error) => {
					console.error('Failed to send message:', error);
					alert('Failed to send message. Please try again later.');
				}
			);
	};

	return (
		<div className="contact-us" id="contact">
			<div className="contact-us__container-text">
				<h2 className="contact-us__title">CONTACT US</h2>
			</div>
			<div className="contact-us__responsive">
				<div className="contact-us__col-right">
					<div className="contact-us__container-cards">
						{DATA_CONTACT.map((item) => (
							<CardContactUs item={item} key={item.id}/>
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
							onSubmit={handleSubmit}
							validate={(values) => {
								const errors = {};

								const EX_REG_EMAIL =
									/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

								const EX_REG_NUMBER = /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;

								if (!values.name.trim()) {
									errors.name = 'The full name field cannot be empty';
								}

								if (!values.email.trim()) {
									errors.email = 'The email field cannot be empty';
								} else if (!EX_REG_EMAIL.test(values.email)) {
									errors.email = 'Enter a valid email';
								}

								if (!values.number.trim()) {
									errors.number = 'The number field cannot be empty';
								} else if (!EX_REG_NUMBER.test(values.number)) {
									errors.number = 'Enter a valid number';
								}

								if (!values.message.trim()) {
									errors.message = 'Do not leave the message field empty';
								}

								return errors;
							}}
						>
							{({errors, touched, handleSubmit}) => (
								<Form
									className="contact-us__form"
									onSubmit={handleSubmit}
									data-aos="flip-right"
									data-aos-delay="150"
								>
									<Field
										className="contact-us__input-full-name"
										name="name"
										placeholder="Full Name"
									/>
									{touched.name && errors.name && (
										<div className="contact-us__msg-error">{errors.name}</div>
									)}

									<Field
										className="contact-us__input-email"
										name="email"
										placeholder="Email"
									/>
									{touched.email && errors.email && (
										<div className="contact-us__msg-error">{errors.email}</div>
									)}

									<Field
										className="contact-us__input-number"
										name="number"
										placeholder="Number"
									/>
									{touched.number && errors.number && (
										<div className="contact-us__msg-error">{errors.number}</div>
									)}

									<Field
										type="textarea"
										className="contact-us__input-message"
										name="message"
										placeholder="Message"
									/>
									{touched.message && errors.message && (
										<div className="contact-us__msg-error">{errors.message}</div>
									)}

									<button type="submit" className="contact-us__btn-send-message">
										Send Message
									</button>

									{msgFormSend && (
										<div className="contact-us__msg-success">WE WILL COME BACK TO YOU SOON</div>
									)}
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</div>
						);
						};



						export default ContactUs;
