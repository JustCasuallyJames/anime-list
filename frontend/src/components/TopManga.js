import React from 'react'
import Posts from './Posts.js';

const TopManga = ({ topManga }) => {
	return (
		<div className="top-manga-page">
			<h1><strong>Top 10 Manga Series</strong></h1>
			<Posts animeList={topManga}/>
		</div>
	)
}

export default TopManga
