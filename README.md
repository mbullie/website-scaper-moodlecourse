# website-scaper-moodlecourse
Plugin that allow to scrape moodle course page into zip for offline viewing 

[![Version](https://img.shields.io/npm/v/website-scraper-puppeteer.svg?style=flat)](https://www.npmjs.org/package/website-scraper-puppeteer)
[![Downloads](https://img.shields.io/npm/dm/website-scraper-puppeteer.svg?style=flat)](https://www.npmjs.org/package/website-scraper-puppeteer)
[![Node.js CI](https://github.com/website-scraper/website-scraper-puppeteer/actions/workflows/node.js.yml/badge.svg)](https://github.com/website-scraper/website-scraper-puppeteer)

# Based on website-scraper-puppeteer
Plugin for [website-scraper](https://github.com/website-scraper/node-website-scraper) which returns html for dynamic websites using [puppeteer](https://github.com/puppeteer/puppeteer).

This module is an Open Source Software maintained by one developer in free time. If you want to thank the author of this module you can use [GitHub Sponsors](https://github.com/sponsors/s0ph1e) or [Patreon](https://www.patreon.com/s0ph1e).

## Requirements
* nodejs version >= 8
* website-scraper version >= 4

## Installation
```sh
npm install website-scraper ./website-scraper-highskills
```

## Usage
```javascript
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
```
Highskills plugin constructor accepts next params:
* `launchOptions` - *(optional)* - puppeteer launch options, can be found in [puppeteer docs](https://github.com/puppeteer/puppeteer/blob/v1.20.0/docs/api.md#puppeteerlaunchoptions)
* `scrollToBottom` - *(optional)* - in some cases, the page needs to be scrolled down to render its assets (lazyloading). Because some pages can be really endless, the scrolldown process can be interrupted before reaching the bottom when one or both of the bellow limitations are reached:
    * `timeout` - in milliseconds
    * `viewportN` - viewport height multiplier
* `blockNavigation` - *(optional)* - defines whether navigation away from the page is permitted or not. If it is set to true, then the page is locked to the current url and redirects with `location.replace(anotherPage)` will not pass. Defaults to `false`

## How it works
It starts Chromium and performs login and then redirects to course page and downloads it's content in a zip file for offline viewing.
