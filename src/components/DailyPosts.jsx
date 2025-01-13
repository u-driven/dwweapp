import React from 'react';
import TITLE from '../image/title-img.png';
import BLOG_1 from '../image/blog-1.jpg';
import BLOG_2 from '../image/blog-2.jpg';
import BLOG_3 from '../image/blog-3.jpg';
import CardDailyPosts from './CardDailyPosts';
import '../css/dailypost.css';

const DailyPosts = () => {
	const CARDS_DAILY_POSTS = [
		{
			name: 'BLOG TITLE GOES HERE',
			img: BLOG_1,
			description:
				' Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			id: 1,
			scroll: 150,
		},
		{
			name: 'BLOG TITLE GOES HERE',
			img: BLOG_2,
			description:
				' Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			id: 2,
			scroll: 300,
		},
		{
			name: 'BLOG TITLE GOES HERE',
			img: BLOG_3,
			description:
				' Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			id: 3,
			scroll: 450,
		},
	];

	return (
		<div className="daily-post" id="blog">
			<div className="daily-post__container-text">
				<img className="daily-post__img" src={TITLE} alt="img-section" />
				<h2 className="daily-post__title">DAILY POSTS</h2>
			</div>
			<div className="daily-post__container-cards">
				{CARDS_DAILY_POSTS.map((item) => (
					<CardDailyPosts item={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default DailyPosts;
