import { React, useState } from 'react';
import AnimeDetails from './AnimeDetails.js';

const AnimeCard = ({ anime, index}) => {

    return (
        <article className="anime-card">
            <button type="button" class="btn shadow-none" data-bs-toggle="modal" 
            data-bs-target={`#animedetails-${index}`} >
                <figure className="figure-outer-block">
                    <img className="image-inner-block" src={anime.image_url} alt="Anime Image" />
                </figure>
                <h3 className="anime-card-title">{anime.title}</h3>
            </button>
        </article >
    );
};

export default AnimeCard;