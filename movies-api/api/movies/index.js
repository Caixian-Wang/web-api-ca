import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import reviewModel from '../reviews/reviewModel';
import express from 'express';
import {
    getUpcomingMovies,
    getGenres
  } from '../tmdb-api';
  
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

router.get('/:id/reviews', asyncHandler(async (req, res) => {
    const movieId = parseInt(req.params.id);
    const reviews = await reviewModel.find({ movieId });
  
    if (reviews && reviews.length > 0) {
      res.status(200).json({
        movieId,
        total_reviews: reviews.length,
        reviews
      });
    } else {
      res.status(404).json({
        message: `No reviews found for movie with id ${movieId}.`,
        status_code: 404
      });
    }
  }));

  router.post('/:id/reviews', asyncHandler(async (req, res) => {
    const movieId = parseInt(req.params.id);
    const { author, content, rating } = req.body;

    if (!author || !content || rating === undefined) {
      return res.status(400).json({
        message: 'Author, content, and rating are required.'
      });
    }

  const movie = await movieModel.findByMovieDBId(movieId);
  if (!movie) {
    return res.status(404).json({
      message: `Movie with id ${movieId} does not exist in the database.`
    });
  }

  const newReview = new reviewModel({
    movieId,
    author,
    content,
    rating
  });

  await newReview.save();
  res.status(201).json({
    message: 'Review added successfully.',
    review: newReview
  });
}));
export default router;
