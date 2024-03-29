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
                                <h3><strong>Type: </strong>{anime.type}</h3>
                                {anime.type === "TV" ?
                                    (anime.episodes == null) ?
                                        <h3><strong>Episodes: </strong>TBA</h3>
                                        :
                                        <h3><strong>Episodes: </strong>{anime.episodes}</h3>
                                    :
                                    null}
                                <h3><strong>Score: </strong>{anime.score == 0 ? "Not scored yet.":anime.score + "/10"}</h3>
                                <h3><strong>Synopsis: </strong>
                                    {
                                        anime.synopsis == null ? "Click the link below for the synopsis." : anime.synopsis
                                    }</h3>
                                <h3><strong>Start Date: </strong>{anime.start_date == null ? "TBA" : anime.start_date.substring(0, 10)}</h3>
                                <h3><strong>End Date: </strong>
                                    {
                                        anime.airing ? "Still Airing" : (anime.end_date == null ? "TBA" : anime.end_date.substring(0, 10))
                                    }</h3>
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
