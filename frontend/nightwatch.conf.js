const geckodriver = require("geckodriver");

module.exports = {
	"src_folders": ["tests"],

	"webdriver": {
		"start_process": true,
		"server_path": geckodriver.path,
		"port": 9515
	},

	"test_settings": {
		"default": {
			"desiredCapabilities": {
				"browserName": "firefox"
			}
		}
	}
}