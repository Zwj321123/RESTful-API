# RESTful API
## Introduction
This is a RESTful API for a simple Wikipedia application. It is built using Node.js, Express, and MongoDB. The API is designed to be used with a front-end application that consumes the API. The front-end application is not included in this repository. The API is designed to be used with the MongoDB database.

## Installation
1. Clone the repository
2. Install the dependencies
```
npm init
npm install express ejs body-parser mongoose --save
```
3. Run the server
```
node server.js
```
4. Open the application in your browser
```
http://localhost:3000
```

## Usage
The API is designed to be used with a front-end application that consumes the API. The front-end application is not included in this repository. The API is designed to be used with local MongoDB database.
To test the API, you can use a tool like Postman. The API has the following endpoints:
* GET /articles: get all articles
* POST /articles: create a new article
* GET /articles/:articleTitle: get a specific article
* PUT /articles/:articleTitle: overwrite a specific article
* PATCH /articles/:articleTitle: update a specific article
* DELETE /articles/:articleTitle: delete a specific article
* DELETE /articles: delete all articles

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

