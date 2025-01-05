# Assignment 2 - Web API.

Name: CaixianWang

Features

A bullet-point list of the ADDITIONAL features you have implemented in the API THAT WERE NOT IN THE LABS (or modifications to existing features):

Added user authentication using JSON Web Tokens (JWT).

Implemented user roles (e.g., admin and standard users) with role-based access control.

Enhanced error handling with descriptive error messages and proper HTTP status codes.

Paginated API responses for better performance.

Added search and filter functionalities for movies.

Integrated API logging for monitoring requests and responses.

Allowed uploading and managing movie posters through a file upload endpoint.

Setup Requirements

Outline any non-standard setup steps necessary to run your app locally after cloning the repo:

Ensure you have Node.js and MongoDB installed on your system.

Clone the repository and navigate to the movies-api directory.

Run npm install to install dependencies.

Start the MongoDB service locally or provide a connection string for a hosted instance.

Set up the .env file as described in the next section.

Run the database seed command: npm run seed (if applicable).

Start the development server using npm run dev.

API Configuration

Before running the API, you need to create a .env file in the movies-api directory with the following variables:

NODEENV=development
PORT=8080
HOST=localhost
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret

Replace YourMongoURL and YourJWTSecret with the appropriate values.

API Design

Overview of the web API endpoints:

Movies API:

/api/movies | GET | Get a list of movies with support for pagination (?page={number}&limit={number}).

/api/movies/{movieId} | GET | Get individual movie details.

/api/movies/upcoming | GET | Get a list of upcoming movies.

/api/movies/genres | GET | Get a list of movie genres.

Users API:

/api/users | GET | Get all users.

/api/users | POST | Create a new user and support the registration function (action=register).

/api/users/login | POST | Log in and return the JWT token.

Reviews API:

/api/reviews | POST | To create a new comment, you need to provide movieId, author, content, and rating.

/api/reviews/{reviewId} | GET | Get the details of a single review.

Security and Authentication

Details of authentication and security:

Authentication: Implemented using JSON Web Tokens (JWT). Tokens are issued upon login and required for protected routes.

Protected Routes:

/api/movies/{movieid}/reviews (POST): Requires a valid JWT.

/api/admin/* endpoints: Requires both a valid JWT and admin role.

Integrating with React App

The React frontend (react-movies) integrates with the API as follows:

Views that use the API:

Movie list page: Fetches paginated movie data from /api/movies.

Movie details page: Fetches data from /api/movies/{movieid} and reviews from /api/movies/{movieid}/reviews.

Login/Signup pages: Interact with /api/users and /api/users/login.

Updates to React App:

Replaced TMDB API calls with custom API endpoints.

Added user authentication using JWT tokens stored in local storage.

Protected routes for creating reviews.

Independent Learning

Non-standard features developed for the app:

Implemented JWT-based authentication and role-based access control.

Developed custom pagination logic to handle large datasets efficiently.

Learned and integrated file upload functionality to manage movie posters.

Enhanced React app with secure routes and token-based user sessions.