import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
	axios.defaults.baseURL = 'http://localhost:3000'; //this is to set the default so that the axios grabs data from that specific endpoint

	const [animeList, setAnimeList] = useState([]);
	const [topAnime, setTopAnime] = useState([]);
	const [search, setSearch] = useState("");
	const [animeData, setAnimeData] = useState([]);

	const getTopAnime = () =>{
		const tempAnime = axios.get("/getAnimelist")
			.then(res => res.data) //gets the response from the call and returns the data to be used to set the top Anime's
			//this will grab the top elements of the top animes and sets it to the topAnime value
			.then(data => setTopAnime(data.top.slice(0,10)))
			.catch(err => console.log(err)) //catches for errors
	}

	const HandleSearch = e => {
		/*
			On search,  
		*/
		e.preventDefault();
		console.log(search)
		fetchAnime(search)
	}

	const fetchAnime = async (anime) =>{
		const temp = axios.get(`/${anime}`) //creates a promise to get the data at /some anime
			.then(res => res.data) //grabs the responses data
			.then(data => setAnimeList(data.results)) //grabs the results and saves it into the animeList variable
			.catch(err => console.log(err))
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
				{/* <Sidebar topAnime={topAnime}/> */}
				<MainContent HandleSearch={HandleSearch}
				search={search}
				setSearch={setSearch}
				animeList={animeList}/>
			</div>
      	</div>
  );
}

export default App;
