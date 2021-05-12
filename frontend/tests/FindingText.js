module.exports = {
	'Finding AnimeDatabase Name' (browser){
		browser.url("http://localhost:3001")
			.waitForElementVisible(".header-name")
			.assert.containsText(".header-name", "AnimeDatabase");
	},

	'Finding Anime Name' (browser){
		browser.url("http://localhost:3001")
			.assert.cssProperty(".anime-list", "display", "flex");
	}
}