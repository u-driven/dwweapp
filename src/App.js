import React, { useState } from 'react';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import CustomersReviews from './components/CustomersReviews';
import Main from './components/Main';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DailyPosts from './components/DailyPosts';
import 'swiper/css/bundle';
import 'swiper/css';
import Footer from './components/Footer';
import BURGER_1 from './image/product-1.png';
import BURGER_2 from './image/product-2.png';
import BURGER_3 from './image/product-3.png';
import BURGER_4 from './image/product-4.png';
import BURGER_5 from './image/product-5.png';
import BURGER_6 from './image/product-6.png';
import BURGER_7 from './image/product-7.png';
import BURGER_8 from './image/product-8.png';
import BURGER_9 from './image/product-9.png';
import BURGER_10 from './image/product-10.png';
import BURGER_11 from './image/product-11.png';
import BURGER_12 from './image/product-12.png';
import BURGER_13 from './image/product-13.png';
import BURGER_14 from './image/product-14.png';
import BURGER_15 from './image/product-15.png';
import BURGER_16 from './image/product-16.png';
import BURGER_17 from './image/product-17.png';
import BURGER_18 from './image/product-18.png';

AOS.init({
	duration: 800,
});

function App() {
	const [badge, setBadge] = useState(0);
	const [cartFood, setCartFood] = useState([]);
	const [totalProduct] = useState([
		{
			name: 'CHEESE DOUBLE HAMBURGER',
			price: 18.99,
			img: BURGER_1,
			stars: 5,
			id: 1,
			scroll: 150,
			amount: 1,
		},
		{
			name: 'BACON EGG HAMBURGER',
			price: 8.99,
			img: BURGER_2,
			stars: 3,
			id: 2,
			scroll: 300,
			amount: 1,
		},
		{
			name: 'VEGETARIAN HAMBURGER',
			price: 15.99,
			img: BURGER_3,
			stars: 4,
			id: 3,
			scroll: 450,
			amount: 1,
		},
		{
			name: 'BIG HAMBURGER DOUBLE',
			price: 9.99,
			img: BURGER_4,
			stars: 5,
			id: 4,
			scroll: 600,
			amount: 1,
		},
		{
			name: 'HAMBURGER CHEESE FISH',
			price: 12.99,
			img: BURGER_5,
			stars: 5,
			id: 5,
			scroll: 750,
			amount: 1,
		},
		{
			name: 'CUCUMBER HAMBURGER',
			price: 11.99,
			img: BURGER_6,
			stars: 3,
			id: 6,
			scroll: 900,
			amount: 1,
		},
		{
			name: 'TRIPLE BEEF AND CHICKEN BURGER',
			price: 21.99,
			img: BURGER_7,
			stars: 5,
			id: 7,
			amount: 1,
		},
		{
			name: 'DOUBLE BURGER AND CHEESE WITH CUCUMBER',
			price: 19.99,
			img: BURGER_8,
			stars: 5,
			id: 8,
			amount: 1,
		},
		{
			name: 'SIMPLE CHICKEN BURGER',
			price: 19.99,
			img: BURGER_9,
			stars: 3,
			id: 9,
			amount: 1,
		},
		{
			name: 'FULL MEAT BURGER HALLOWEN SPECIAL',
			price: 28.99,
			img: BURGER_10,
			stars: 4,
			id: 10,
			amount: 1,
		},
		{
			name: 'FULL BURGER TOMATO, ONION AND EXTRA CUCUMBER',
			price: 17.99,
			img: BURGER_11,
			stars: 4,
			id: 11,
			amount: 1,
		},
		{
			name: 'SIMPLE CHICKEN BURGER',
			price: 6.99,
			img: BURGER_12,
			stars: 4,
			id: 12,
			amount: 1,
		},
		{
			name: 'DOUBLE BURGER WITH CHEESE AND CUCUMBER',
			price: 12.99,
			img: BURGER_13,
			stars: 4,
			id: 13,
			amount: 1,
		},
		{
			name: 'COMPLETE TRIPLE BURGER',
			price: 19.99,
			img: BURGER_14,
			stars: 5,
			id: 14,
			amount: 1,
		},
		{
			name: 'COMPLETE BURGER WITH RED ONION AND WHITE SAUCE',
			price: 17.99,
			img: BURGER_15,
			stars: 4,
			id: 15,
			amount: 1,
		},
		{
			name: "BURGER 'PERFECTLY BALANCED'",
			price: 20.99,
			img: BURGER_16,
			stars: 5,
			id: 16,
			amount: 1,
		},
		{
			name: 'DOUBLE DOUBLE',
			price: 14.99,
			img: BURGER_17,
			stars: 2,
			id: 17,
			amount: 1,
		},
		{
			name: 'COMBO DOUBLE BURGER, LARGE FRENCH FRIES AND SODA TO CHOOSE',
			price: 28.99,
			img: BURGER_18,
			stars: 5,
			id: 18,
			amount: 1,
		},
	]);

	const handleClickAddCart = (item, id) => {
		setBadge(badge + 1);
		const find = cartFood.findIndex((item) => item.id === id);

		if (find === -1) {
			setCartFood((old) => [...old, item]);
		} else {
			const toUpdate = cartFood.map((item) =>
				item.id === id ? { ...item, amount: item.amount + 1 } : item
			);
			setCartFood(toUpdate);
		}
	};

	const deleteAmountProduct = (id) => {
		const toUpdate = cartFood.map((item) =>
			item.id === id ? { ...item, amount: item.amount - 1 } : item
		);
		setCartFood(toUpdate);
		setBadge(badge - 1);
	};

	const filterProduct = () => {
		const toUpdate = cartFood.filter((item) => item.amount !== 0);
		setCartFood(toUpdate);
	};

	return (
		<>
			<div className="app__container">
				<Navbar
					badge={badge}
					cartFood={cartFood}
					deleteAmountProduct={deleteAmountProduct}
					filterProduct={filterProduct}
					totalProduct={totalProduct}
				/>
				<Main />
				<Menu handleClickAddCart={handleClickAddCart} />
				<AboutUs />
				<CustomersReviews />
				<ContactUs />
				<DailyPosts />
				<Footer />
			</div>
		</>
	);
}

export default App;
