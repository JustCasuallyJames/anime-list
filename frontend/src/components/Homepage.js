import React from 'react'
import Posts from './Posts.js';

const Homepage = ({ topAnime }) => {
	return (
		<div className="homepage-cards">
			<h1><strong>Top 10 Anime Series</strong></h1>
			<Posts animeList={topAnime}/>
		</div>
	)
}


export default Homepage
