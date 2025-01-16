import React from 'react';
import '../css/main.css';
import '../css/welcome.scss'
import BURGER_MAIN from '../image/jakob-owens-WUmb_eBrpjs-unsplash.jpg';
import CardMain from './CardMain';
import { FaHamburger, FaHeadset, FaTruck, FaAdversal, FaRegNewspaper     } from 'react-icons/fa';
import {  IoIosRestaurant    } from 'react-icons/io';
import {  GrCloudComputer     } from 'react-icons/gr';
const Main = () => {
	const DATA_CARD_MAIN = [
		{
			name: '網路廣告規劃與執行',
			icon: <FaAdversal  />,
			description:
				'從策略制定到廣告投放，我們協助客戶在不同數位平台（如Google Ads、Facebook、LINE等）上精準觸及目標受眾，最大化廣告效益',
			id: 1,
			scroll: 150,
		},
		{
			name: '社群媒體維運',
			icon: <FaHeadset />,
			description:
				'包括內容策略規劃、貼文設計、用戶互動管理，以及社群數據分析，幫助品牌在Facebook、Instagram、LINE OA 等平台上維持良好曝光和用戶關係',
			id: 2,
			scroll: 300,
		},
		{
			name: '餐廳預訂服務系統',
			icon: <IoIosRestaurant  />,
			description:
				'提供一站式的線上預訂解決方案，結合行銷活動，提升餐廳的運營效率和客戶滿意度',
			id: 3,
			scroll: 450,
		},
		{
			name: '數位活動規劃與執行',
			icon: <GrCloudComputer   />,
			description:
				'策劃線上與線下整合的品牌推廣活動，包括產品發表、促銷活動及互動式行銷，創造高效的用戶參與',
			id: 4,
			scroll: 600,
		},
		{
			name: '品牌網站與電子商務建置',
			icon: <FaRegNewspaper  />,
			description:
				'提供品牌官網及電子商務平台的設計與建置服務，打造符合市場需求的數位形象與銷售管道',
			id: 5,
			scroll: 600,
		},
	];
const BRAND_NAME = 'Udriven'
	const items = Array.from({ length: 40 }, (_, i) => i);

	return (
		<main className="main" id="home">
			<div className="welcome">
				<div id="brand">
					{items.map((_, index) => (
						<div key={index} className="BRAND_NAME">
							{BRAND_NAME}
						</div>
					))}
				</div>
			</div>

			<div className="main__container-text">
				<h1 className="main__title" data-aos="fade-up" data-aos-delay="300">
					Unleash Your Potential
				</h1>
				<p className="main__subtitle" data-aos="fade-up" data-aos-delay="450">
					遊隼行銷秉持「精準、快速、有效」的專業精神，如同遊隼般敏捷準確。我們以創新的數位工具和深入的市場洞察，為客戶量身打造最佳解決方案，助力品牌在瞬息萬變的市場中飛速崛起。
				</p>
			</div>
			<div className="main__container-card"></div>
			<div className="main__container-cards">
				{DATA_CARD_MAIN.map((item) => (
					<CardMain item={item} key={item.id}/>
				))}
			</div>
		</main>
	);
};

export default Main;
