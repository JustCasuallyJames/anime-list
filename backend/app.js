const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const express = require('express');
const app = express();
const fetch = require('node-fetch')
const port = 3000;
const anime_url = "https://api.jikan.moe/v3";

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//GET REQUESTS
app.get("/", (req, res) => res.send("This is the homepage"));
app.get("/getTopAnime", async (req, res) => {
	const temp = await fetch(`${anime_url}/top/anime/1/tv`)
		.then(res => res.json())
	res.send(temp)
});

//obtains the top results data for the anime
app.get("/:anime", async (req, res) => {
	console.log("Backend: req.params.anime:",req.params.anime); 
	console.log("Backend: req.params.limit:",req.params.limit); 
	const anime = req.params.anime;
	const limit = req.params.limit;
	const query = anime;
	const temp = await fetch(`${anime_url}/search/anime?q=${query}&order_by=title&sort=asc`)
		.then(res => res.json())
	res.send(temp);
})

//obtains the top results data for the anime
app.get("/:anime/:page", async (req, res) => {
	console.log("Backend: req.params.anime:",req.params.anime); 
	console.log("Backend: req.params.limit:",req.params.limit); 
	const anime = req.params.anime;
	const limit = req.params.limit;
	const query = anime;
	const temp = await fetch(`${anime_url}/search/anime?q=${query}&order_by=title&sort=asc`)
		.then(res => res.json())
	res.send(temp);
})

//obtains the top 10 data for the manga
app.get("/getTopManga", async (req, res) => {
	const temp = await fetch(`https://api.jikan.moe/v3/top/manga/1/manga`)
		.then(res => res.json())
	res.send(temp)
})



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

