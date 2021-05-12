import React from 'react'
import Posts from './Posts.js';

const TopUpcomingAnime = ({ topUpcomingAnime }) => {
	return (
		<div className="top-upcoming-anime-page">
			<h1><strong>Top 10 Upcoming Anime Series</strong></h1>
			<Posts animeList={topUpcomingAnime}/>
		</div>
	)
}

export default TopUpcomingAnime
