const scrape = require('website-scraper');
const HighskillsPlugin = require('website-scraper-highskills');

//CHANGE HERE
const username = 'user';
const password = 'password';
const wantsurl = 'http://localhost/course/view.php?id=2';
const directory = './temp/course';

(async () => {
    scrape({
		urls: [wantsurl],
		directory: directory,
		request: {
			method: 'POST',
			username: username,
			password: password,
			wantsurl: wantsurl,
			directory: directory,
		},
		plugins: [ 
		  new HighskillsPlugin({
			launchOptions: { headless: false }, /* optional */
			scrollToBottom: { timeout: 100000, viewportN: 10 }, /* optional */
			blockNavigation: false, /* optional */
		  })
		]
	});
})();