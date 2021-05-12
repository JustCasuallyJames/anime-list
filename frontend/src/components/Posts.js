import { React, useState } from 'react'
import AnimeCard from './AnimeCard.js'
import AnimeDetails from './AnimeDetails.js';

const Posts = ({ animeList }) => {
	const ModalContent = () => {
		return (
			<div>
				{animeList.map(anime => (
					<AnimeDetails anime={anime} key={anime.mal_id} index={anime.mal_id} />
				))}
			</div>

		)
	}

	return (
		<div className="anime-list">
			{animeList.map(anime => (
				<AnimeCard anime={anime} key={anime.mal_id} index={anime.mal_id}/>
			))}
			<ModalContent/>
		</div>

	);
}

export default Posts
