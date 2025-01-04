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
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 02
│  │  │  └─ cf01344731d0c4fca839c8ac6886bec8b8bfac
│  │  ├─ 07
│  │  │  ├─ 52085b06736cddd52561964f266f352996cc0b
│  │  │  └─ e84ef3785758655573385c476a62760f1b598f
│  │  ├─ 08
│  │  │  └─ 0d6c77ac21bb2ef88a6992b2b73ad93daaca92
│  │  ├─ 0a
│  │  │  └─ 37333a7aaca0b1ac0070e00fa8c14ded89684e
│  │  ├─ 0e
│  │  │  ├─ 62e4942b536ee51bc7efb16010164f8e040601
│  │  │  └─ c690b8bf5a770fb16e477f02e8e46a913da124
│  │  ├─ 11
│  │  │  └─ f0fd8844f746d985f173ad82920fc3b30f2353
│  │  ├─ 13
│  │  │  └─ 808a074ed0c23fcf867234281373aebad6bcb5
│  │  ├─ 14
│  │  │  └─ 08b53469a62de955764aa0db4f66b967a37a92
│  │  ├─ 16
│  │  │  └─ 6e252b4881f8925a74afb5220578d8aeb5a287
│  │  ├─ 17
│  │  │  └─ 93bf9eb8e41c5721590c4b9e1ce704193c6bb7
│  │  ├─ 20
│  │  │  └─ 5d1f731433ad00aed2ee1896635cea309bb9e1
│  │  ├─ 21
│  │  │  ├─ 3fb79f92db49ddd89b45604481ab8a510c364d
│  │  │  ├─ a2f7c4cdf2d3dfda09f2fd406dbd64d2fd2aa0
│  │  │  └─ d305f60057118e0b01df224a4d19fba2d40e92
│  │  ├─ 22
│  │  │  └─ f3c4c45d771c90c436fdebe2a6dfae4be41845
│  │  ├─ 23
│  │  │  └─ 694e5db23db193ce5579a09b8212c820f6662d
│  │  ├─ 24
│  │  │  └─ dd4c0118633b2b441654835c01b6df404b9d6c
│  │  ├─ 27
│  │  │  └─ 67b79a29e9bdb3495e9dad5e8bb5a6d7e5296a
│  │  ├─ 28
│  │  │  └─ ce59592ad2d56ccd111e29d58d65bc2fff62bc
│  │  ├─ 2c
│  │  │  └─ 51e03e2439a08cbfb5008adde7b22b99e9d3c6
│  │  ├─ 2d
│  │  │  ├─ 5388acc94f4e312f968f35b877b5fe655da082
│  │  │  └─ 6e7e1345dbf397a23e90c71486e9a20e8bce16
│  │  ├─ 2f
│  │  │  └─ de5ffa104fc616265ea6da1be5b0c0510df188
│  │  ├─ 30
│  │  │  └─ b806ad11108c1ba3d35a4b3e48293095203908
│  │  ├─ 31
│  │  │  ├─ 57e2f21332c3a8bebcd416a291be48fe2736a5
│  │  │  └─ fe7fff2d79693eab9c4bd754c30e6b86ec6be2
│  │  ├─ 38
│  │  │  └─ 7458e0d4a575407bfe09fd30666e407db21f6b
│  │  ├─ 39
│  │  │  └─ 721934df84c4d68d490a56b3f2ef93dded856a
│  │  ├─ 3b
│  │  │  └─ db16d1ed0577581263ea480957f252d7107a94
│  │  ├─ 3f
│  │  │  ├─ 6941c12076534a2856e83e21bf1df85a8622c5
│  │  │  ├─ 9836339bc27c5c3c228831b9f2cb3cb33a34ca
│  │  │  └─ bfbf3dd87a72c67d66e3237242af8dc551f9fd
│  │  ├─ 40
│  │  │  ├─ 1b4cd13cc47f1ad4139448969dae526334d923
│  │  │  └─ 69a8794433767fc5bd483ccaa5bf011e03cd3c
│  │  ├─ 41
│  │  │  └─ 7e02b26ac99df3f65dc742647d87b09c1b4583
│  │  ├─ 42
│  │  │  └─ b4c237f3a35dd2f025e5a3a08d7151c11fcefb
│  │  ├─ 46
│  │  │  └─ 6321b90123db94013f2bf7c30cf16e9ff6bb4f
│  │  ├─ 4a
│  │  │  └─ 6b539e7385236d780d2293786f4e9c5964bfd5
│  │  ├─ 4f
│  │  │  └─ 2ee25e3ae5c53e3b46608b383d7eed634a83ab
│  │  ├─ 52
│  │  │  └─ 0315b02330c0116abdf6a2ab4dc76956d2510d
│  │  ├─ 56
│  │  │  └─ e99e57318267772effd8dec0d69526b89a1244
│  │  ├─ 57
│  │  │  ├─ 1f1361211be244920968dece2e4311060cc747
│  │  │  └─ c1180805bce7cc79a2317418a5006a0c91b304
│  │  ├─ 5a
│  │  │  └─ c3ac88e1304d17c95b85dc5fa328ed6b0ac8d4
│  │  ├─ 5c
│  │  │  └─ 497824b57a22c181741708c65f52d1fb73650c
│  │  ├─ 63
│  │  │  └─ c33f407c5d1ce4e7e82e055f4e715676eafe2d
│  │  ├─ 65
│  │  │  ├─ db99163d007c19b71710d9d84d9a3620c0f6d4
│  │  │  └─ dfeb028c8980f48d79c3ba30aecf0e69af8544
│  │  ├─ 68
│  │  │  └─ 1ab2e8657cc61d8802a8d73dace89948682cc3
│  │  ├─ 69
│  │  │  ├─ 4fdb7fab8e02b80cb8e6f3a7b690a9b68d9581
│  │  │  └─ fe7150518dd1a1d1dfe93e427d2b72e5eaff45
│  │  ├─ 6b
│  │  │  └─ 217bb6ec312727a58370ccc386ee25db119fc1
│  │  ├─ 6d
│  │  │  └─ 9ba10511bfd8ce8790de57d00f565ed61d4bf7
│  │  ├─ 6e
│  │  │  ├─ 2922c4b3f369c5a059b85da9c4339aff653c7f
│  │  │  └─ 64632219b3ad5a8db15dd60310ed2405e7773e
│  │  ├─ 6f
│  │  │  ├─ 9f5bebfce6e0e509add487b2d7dc0558dc60da
│  │  │  └─ f8640efe7c44a7dfa83ac98ef603239bdc2c9a
│  │  ├─ 75
│  │  │  └─ 8583cdea24659427f483c7339aa2c903384b33
│  │  ├─ 77
│  │  │  └─ 68057c7506fbc40728f97312dd69527bfb6fba
│  │  ├─ 78
│  │  │  └─ 21033a78a45461d3b2ec86307620d28f0c149c
│  │  ├─ 7b
│  │  │  └─ c574d11669c95f29ab15b8b55effbf2ec85000
│  │  ├─ 7e
│  │  │  ├─ 374ce869e4257846bdf4522931ae47b9965305
│  │  │  └─ a86235ca8c88f7fb0fb41eb86ba2e59f57aa26
│  │  ├─ 81
│  │  │  └─ 52a0ab70ebc1ca1cd872857a10cfd0823077bf
│  │  ├─ 86
│  │  │  └─ f6f59c7b6d6794aa9ca100e657e01daf367e08
│  │  ├─ 8e
│  │  │  └─ 29b36dea7f04ae8729d8b33ecc05c3c9b0fe46
│  │  ├─ 90
│  │  │  ├─ 452ec5cbac73fe05c6d32575ee7a830cbe0d0f
│  │  │  └─ 80ebfc6205de4b8e546b1dd3a2ca43d07d6489
│  │  ├─ 94
│  │  │  └─ eddec024c9e4a7b4a37ebc90a1fed9ca6707a6
│  │  ├─ 96
│  │  │  └─ 9d420b3586c2ef78be293ead89c3e4509f79dd
│  │  ├─ 99
│  │  │  └─ 312e39a9c8bca87eced9680aa165c95f646332
│  │  ├─ 9a
│  │  │  └─ bdfb6894f316fd9de7f9cfde0c2105ba84aa50
│  │  ├─ 9d
│  │  │  ├─ 7930b354c2d9772ccf2927c89eba8135449241
│  │  │  └─ c7c24829a6c96817e030cbbfbad76d5e36a3ce
│  │  ├─ 9e
│  │  │  └─ 38ec46562786dd235b2d1331954190d78ccf5b
│  │  ├─ 9f
│  │  │  └─ accf66d881758e50de967cdc529f377331acc2
│  │  ├─ a1
│  │  │  ├─ 1777cc471a4344702741ab1c8a588998b1311a
│  │  │  └─ cb0028de3c094a70062136dcde38e3af0770c8
│  │  ├─ a3
│  │  │  └─ c6bf7b42444b0fc7c252453fd2c47966131239
│  │  ├─ a4
│  │  │  └─ e47a6545bc15971f8f63fba70e4013df88a664
│  │  ├─ a6
│  │  │  └─ e94448d15c20d8615e1fa6dc0773286642b209
│  │  ├─ a7
│  │  │  └─ 6008aaf610cde811a6ae7455c931e54a56d93b
│  │  ├─ a8
│  │  │  └─ dda4d0acd48940e1fb467d272010f8f0cb84ab
│  │  ├─ a9
│  │  │  └─ 1195f4d03d71948ec1093e7913c88039ac9dc1
│  │  ├─ aa
│  │  │  ├─ 069f27cbd9d53394428171c3989fd03db73c76
│  │  │  └─ f5bc2042fb1a8edef830da8c95996074a11646
│  │  ├─ ab
│  │  │  └─ a682cce40fca21451308d48fedd5670a283717
│  │  ├─ ac
│  │  │  └─ 56577599bb4b9084b07ce13b5d7914066ed12c
│  │  ├─ af
│  │  │  └─ 48927174984548d2c1037d3783e1984e9a1ccd
│  │  ├─ b1
│  │  │  └─ 574c81773054ad4303c46f7568c09db101e20f
│  │  ├─ b2
│  │  │  └─ 594048153644609e140ca8649151bf19f17ff6
│  │  ├─ b3
│  │  │  └─ 9b93d8f870f825edc71b7e9cc2d47863e5e591
│  │  ├─ b7
│  │  │  └─ 431110458e7f76fa0a279513325f92a9a14890
│  │  ├─ b9
│  │  │  ├─ 4cdb69871627a0493269c6bcfcd4e728d2b762
│  │  │  └─ a27fa44df881bbf316a906db1282e7f2eeb6ee
│  │  ├─ bb
│  │  │  └─ 6fc7e37c887b41598d9431572af2e85e039358
│  │  ├─ c2
│  │  │  └─ 7997d407752c0fd89eff2917e7ac4f4de0c66c
│  │  ├─ c3
│  │  │  ├─ 69ad40221ef629793ba54d3ca557567bcab660
│  │  │  └─ 74f8587b8c5598746461d7b3499721917b8259
│  │  ├─ c6
│  │  │  └─ bba591381216b569cdcb512d98b53c53fd167d
│  │  ├─ cc
│  │  │  └─ 8912670bb1bf4166790475a912c65f2236f1b4
│  │  ├─ d3
│  │  │  └─ d4c1e9a4c7987bf1913437fc3c8b88e54b2714
│  │  ├─ de
│  │  │  └─ 69a90750f0a4c8f644d4f7796484d4132e0dae
│  │  ├─ e6
│  │  │  └─ e216ddcf28758e70b9f38d08e9e5e4fe417848
│  │  ├─ e7
│  │  │  └─ fe546f1b572b647a8d9225b6a54a3d188f824b
│  │  ├─ e9
│  │  │  └─ e57dc4d41b9b46e05112e9f45b7ea6ac0ba15e
│  │  ├─ ea
│  │  │  └─ 72d753793ec7d27f370912486b7d6aa947e188
│  │  ├─ eb
│  │  │  └─ 43c8652f01e26aa40f2d0986b624836e541e17
│  │  ├─ ed
│  │  │  └─ df449665c38f8a272d5e16020f000b698f7ab9
│  │  ├─ ef
│  │  │  └─ 7bc199445122460ca97eaae3666e8d9255c19f
│  │  ├─ f1
│  │  │  └─ 9d73904c9bd939f17160467411a3b9cdfe3f22
│  │  ├─ f7
│  │  │  └─ a8550473a36d2018f3b4a1eb549cd3dc473944
│  │  ├─ f9
│  │  │  ├─ 0ca6c88be0dc3a608c5d417366ad0f299261d8
│  │  │  └─ 487895463246e74989c6ba558060a0cfb13253
│  │  ├─ fc
│  │  │  ├─ 44b0a3796c0e0a64c3d858ca038bd4570465d9
│  │  │  ├─ 5b08d9a21fd635e510dcfc0958b07bc6a2cb68
│  │  │  └─ ddc40d8c15c7de71236c2941377d613b9317cb
│  │  ├─ ff
│  │  │  └─ 3059c3f099e7703b0e3bb5b9843dcbd0a37153
│  │  ├─ info
│  │  └─ pack
│  ├─ ORIG_HEAD
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
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