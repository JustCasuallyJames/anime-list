import React from 'react'

const AnimeDetails = ({ anime, index }) => {
	return (
		<div class="modal fade bd-example-modal-lg" id={`animedetails-${index}`} tabindex="-1" aria-labelledby="Anime description" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{anime.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div class="modal-body-inline-block ">
                            <div className="modal-body row">
                                <figure className="modal-body col-xl-4">
                                    <img src={anime.image_url} className="modal-image" alt={`${anime.title} Image`} />
                                </figure>
                                <figure className="modal-body col-xl-8">
                                    <h2>Episodes: {anime.episodes}</h2>
                                    <h2>Score: {anime.score}</h2>
                                    <h3>Synopsis: {anime.synopsis}</h3>
									<h6><a href={anime.url} target="_blank">Click here for more details.</a></h6>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	)
}

export default AnimeDetails
