import { React, useState } from 'react'
import AnimeCard from './AnimeCard.js'
import AnimeDetails from './AnimeDetails.js';
import Pagination from './Pagination.js';

const Posts = ({ animeList, postsPerPage, totalPosts, paginate, prevPage, nextPage, search, loaded }) => {
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
		<div>
			<div className="anime-list">
				{console.log("Anime list:", animeList)}
				{animeList.map(anime => (
					<AnimeCard anime={anime} key={anime.mal_id} index={anime.mal_id} />
				))}
				<ModalContent />
			</div>
			{loaded ?
				<Pagination
					postsPerPage={postsPerPage}
					totalPosts={totalPosts}
					paginate={paginate}
					prevPage={prevPage}
					nextPage={nextPage}
					search={search}
				/>
				:
				null
			}

		</div>
	);
}

export default Posts
