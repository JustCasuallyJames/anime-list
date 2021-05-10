import React from 'react'
import AnimeCard from './AnimeCard.js'

const Posts = ({ animeList }) => {
	return (
		<div className="anime-list">
			{animeList.map(anime => (
				<AnimeCard anime={anime} key = {anime.mal_id} />
			))}
		</div>

	);
}

export default Posts
