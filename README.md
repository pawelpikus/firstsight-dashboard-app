# FirstSight - personal dashboard app

This is a clone of Momentum app - a personalised dashboard app.

## Overview

### Usage

User is able to:

- see background images from Unsplash website
- see current time
- see information about three cryptocurrencies (name, current price, price change over 24h, 7d and 30 days)
- see information about current weather at user's location

### Links

- Solution URL: [solution](https://github.com/pawelpikus/firstsight-dashboard-app)

## Install as Chrome extension
The process of adding a custom extension is quite similiar in every modern browser. Below is the instruction for Chrome:
1. git clone the repo
2. go to Chrome->Extensions tab in the browser
3. check the developer mode is on (right upper corner) 
4. click on 'load unpacked' button (left upper corner)
5. find the path to the cloned repo on your desktop.
6. click OK, and you can now use this app as an extension!

To get it to work I created a <code>manifest.json</code> file which is necessary to add the extension to the browser:

```js
{
    "manifest_version": 3,
    "name": "FirstSight - Personal Dashboard",
    "version": "1.0.0",
    "description": "Just for practicing async JS",
    "action": {
        "default_icon": "./img/icon.png"
    },
    "chrome_url_overrides": {
        "newtab": "index.html"
    }
}
```

## Use of API's
In order to fetch data from the Unsplash and Open Weather Map APIs you have to register an account. Then, in the <code> script.js </code> file provide your unique ID keys, given after registering.  

## My process

### Built with

- ES6+ (async/await, fetch API)
- Semantic HTML5 markup
- CSS3 
- Flexbox / Grid
- Crypto API 
- Open Weather Map API
- Unsplash API

### What I learned

With this challenge I trained the concept of asyncronous programming in Javascript. I fetch data from multiple API (background images, crypto info, weather info) and used it to build the app.  

### Continued development

There's TODO widget that needs coding. Also, I'm planning to add new features to already existing widgets (option tags, choice of cities, etc.)

### Useful resources

- [Kevin Powell | CSS Evangelist](https://www.kevinpowell.co/) - My favourite teacher for RWD and CSS as a whole. Highly recommend it!
- [Crypto API](https://www.coingecko.com/en/api/) - all about cryptocurrencies
- [Unsplash Image API](https://unsplash.com/developers) - great source of free to use images
- [Open Weather Map API](https://home.openweathermap.org/) - get your weather data here!
