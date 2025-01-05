# Assignment 2 - Web API.

Name: Your Name

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Feature 1 
 + Feature 2 
 + Feature 3 
 + etc

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

______________________
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie 
- /api/movies/{movieid}/reviews | POST | Create a new review for Movie 

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.
```
web-api-ca
├─ movies-api
│  ├─ .babelrc
│  ├─ api
│  │  ├─ movies
│  │  │  ├─ index.js
│  │  │  └─ movieModel.js
│  │  ├─ reviews
│  │  │  └─ reviewModel.js
│  │  ├─ tmdb-api.js
│  │  └─ users
│  │     ├─ index.js
│  │     └─ userModel.js
│  ├─ authenticate
│  │  └─ index.js
│  ├─ db
│  │  ├─ index.js
│  │  └─ users
│  │     ├─ index.js
│  │     └─ userModel.js
│  ├─ errHandler
│  │  └─ index.js
│  ├─ eslint.config.mjs
│  ├─ index.js
│  ├─ initialise-dev
│  │  ├─ initDevDB.js
│  │  ├─ movies.js
│  │  └─ users.js
│  ├─ package-lock.json
│  └─ package.json
├─ react-movies
│  ├─ .gitignore
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ README.md
│  └─ src
│     ├─ api
│     │  └─ tmdb-api.js
│     ├─ components
│     │  ├─ cardIcons
│     │  │  ├─ addToFavorites.js
│     │  │  ├─ addToPlaylist.js
│     │  │  ├─ removeFromFavorites.js
│     │  │  └─ writeReview.js
│     │  ├─ filterMoviesCard
│     │  │  └─ index.js
│     │  ├─ headerMovie
│     │  │  └─ index.js
│     │  ├─ headerMovieList
│     │  │  └─ index.js
│     │  ├─ HorizontalMovieList
│     │  │  └─ index.js
│     │  ├─ movieCard
│     │  │  └─ index.js
│     │  ├─ movieDetails
│     │  │  └─ index.js
│     │  ├─ movieList
│     │  │  └─ index.js
│     │  ├─ movieReview
│     │  │  └─ index.js
│     │  ├─ movieReviews
│     │  │  └─ index.js
│     │  ├─ reviewForm
│     │  │  └─ index.js
│     │  ├─ siteHeader
│     │  │  └─ index.js
│     │  ├─ spinner
│     │  │  └─ index.js
│     │  ├─ templateMovieListPage
│     │  │  └─ index.js
│     │  └─ templateMoviePage
│     │     └─ index.js
│     ├─ contexts
│     │  └─ moviesContext.js
│     ├─ hooks
│     │  └─ useMovie.js
│     ├─ images
│     │  ├─ film-poster-placeholder.png
│     │  └─ pexels-dziana-hasanbekava-5480827.jpg
│     ├─ index.js
│     ├─ pages
│     │  ├─ addMovieReviewPage.js
│     │  ├─ creditInfPage.js
│     │  ├─ favoriteMoviesPage.js
│     │  ├─ homePage.js
│     │  ├─ movieDetailsPage.js
│     │  ├─ movieRecommendationPage.js
│     │  ├─ movieReviewPage.js
│     │  ├─ movieSimilarPage.js
│     │  ├─ popularMoviesPage.js
│     │  ├─ trendingMoviesPage.js
│     │  └─ upcomingMoviesPage.js
│     └─ util.js
└─ README.md

```