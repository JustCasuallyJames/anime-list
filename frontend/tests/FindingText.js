module.exports = {
	'Finding AnimeDatabase Name' (browser){
		browser.url("http://localhost:3001")
			.waitForElementVisible(".header-name")
			.assert.containsText(".header-name", "AnimeDatabase");
	},

	'Finding Anime Name' (browser){
		browser.url("http://localhost:3001")
			.assert.cssProperty(".anime-list", "display", "flex");
	},

	'Finding Steins Gate Name' (browser){
		browser.url("http://localhost:3001")
		.waitForElementVisible("#animedetails-5114", time=5000)
		.assert.containsText("#animedetails-5114", "Fullmetal Alchemist: Brotherhood")
	}
}