# react-and-flux

## Application built using React and Flux. Uses gulp for builds.

### Installation

* Install [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com/).
* Install the Gulp CLI: `npm install gulp-cli -g`
* Install NPM dependencies: `npm install`
* Build assets: `gulp`
* Copy config file: `cp ./config/config.json.local ./config.config.json`
* Start Express.js server: `node server.js`
* Open `localhost:8080` in your browser.

### Config values

There needs to be a configuration file at `./config/config.json`. Examples for local and production environments are included.

* `port`: Port to run the Express.js server on.
* `mongodb`: URI for MongoDB.
* `allow_delete_all_authors`: Activate the API endpoint that deletes all authors (useful for tests).
