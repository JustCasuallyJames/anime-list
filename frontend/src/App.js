import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
	const [animeList, setAnimeList] = useState([]);
	const [topAnime, setTopAnime] = useState([]);
	const [search, setSearch] = useState("");
	const [animeData, setAnimeData] = useState([]);
	// const getTopAnime = async () =>{
	// 	const tempAnime = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
	// 						.then(res => res.json());
		
	// 	setTopAnime(tempAnime.top.slice(0,5));
	// }
	
	const getTopAnime = () =>{
		const tempAnime = axios.get("http://localhost:3000/getAnimelist")
			.then(res => {
				//console.log("this is the temp anime:", typeof res);
				setTopAnime(res.data.top.slice(0,5)); //this grabs the first 5 elements of the top animes and sets it to the top anime
			})
			.catch(err => { console.log(err);})
	}

	const HandleSearch = e => {
		e.preventDefault();
		console.log(search)
		fetchAnime(search)
	}

	const fetchAnime = async (query) =>{
		const temp = await fetch(`https://api.jikan.moe/v3/
		search/anime?q=${query}&order_by=title&sort=asc&limit=5`)
			.then(res => res.json());

		setAnimeList(temp.results);
	}

	useEffect(() =>{
		getTopAnime();
		console.log("Top Anime");
	}, []);

	console.log(topAnime);

    return (
      	<div className="App">
        	<Header/>
			<div className="content-wrap">
				<Sidebar topAnime={topAnime}/>
				<MainContent HandleSearch={HandleSearch}
				search={search}
				setSearch={setSearch}
				animeList={animeList}/>
			</div>
      	</div>
  );
}

export default App;
