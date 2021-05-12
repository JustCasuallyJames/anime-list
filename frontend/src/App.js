import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Search from './components/Search';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
	axios.defaults.baseURL = 'http://localhost:3000'; //this is to set the default so that the axios grabs data from that specific endpoint
	//used for the accessing of the animes
	const [animeList, setAnimeList] = useState([]);
	const [topAnime, setTopAnime] = useState([]);
	const [search, setSearch] = useState("");
	const [topManga, setTopManga] = useState([]);
	//primarily used for the pagination
	const [loaded, setLoaded] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostPerPage] = useState(10);

	const getTopAnime = () => {
		const tempAnime = axios.get("/anime/getTopAnime")
			.then(res => res.data) //gets the response from the call and returns the data to be used to set the top Anime's
			//this will grab the top elements of the top animes and sets it to the topAnime value
			.then(data => setTopAnime(data.top.slice(0, 10)))
			.catch(err => console.log(err)) //catches for errors
	}

	const getTopManga = () => {
		const tempManga = axios.get("/manga/getTopManga")
			.then(res => res.data)
			.then(data => setTopManga(data.top.slice(0,10)))
			.catch(err => console.log(err))
	}

	const HandleSearch = e => {
		/*
			Upon pressing enter, it will gather the data and fetch the results from what was inputted into the anime database
		*/
		e.preventDefault();
		console.log(search);
		fetchAnime(search);

	}

	const fetchAnime = async (anime) => {
		const temp = axios.get(`/${anime}`) //creates a promise to get the data at /some-anime
			.then(res => res.data) //grabs the responses data
			.then(data => {
				setLoaded(true);
				setAnimeList(data.results)

			}) //grabs the results and saves it into the animeList variable
			.catch(err => console.log(err))
	}

	// Get current Posts
	const indexOfLastPosts = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPosts - postsPerPage;
	const currentPosts = animeList.slice(indexOfFirstPost, indexOfLastPosts);

	//pagination, to change the page of what you're on
	const paginate = pageNumber => setCurrentPage(pageNumber)

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	const nextPage = () => {
		if (currentPage < Math.ceil(animeList.length / postsPerPage)) {
			setCurrentPage(currentPage + 1);
		}
	};
	useEffect(() => {
		getTopAnime();
		getTopManga();
	}, []);

	return (
		<Router>
			<div className="App">
				<Header />
				<Search HandleSearch={HandleSearch} setSearch={setSearch} search={search} />
				<Navbar />
				<div className="content-wrap">
					<Switch>
						<Route exact path="/">
							<Homepage topAnime={topAnime} />
						</Route>
						<Route path="/manga/getTopManga">
							<Posts animeList={topManga} />
							
						</Route>
						<Route path="/:anime">
							<Posts animeList={currentPosts}
								postsPerPage={postsPerPage}
								totalPosts={animeList.length}
								paginate={paginate}
								prevPage={prevPage}
								nextPage={nextPage}
								loaded={loaded}
							/>
						</Route>
						{/* <MainContent HandleSearch={HandleSearch}
							search={search}
							setSearch={setSearch}
							postsPerPage={postsPerPage}
							totalPosts={animeList.length}
							paginate={paginate}
							prevPage={prevPage}
							nextPage={nextPage}
							animeList={currentPosts}
							loaded={loaded}
							topAnime={topAnime}
						/> */}
					</Switch>

				</div>
			</div>
		</Router>

	);
}

export default App;
