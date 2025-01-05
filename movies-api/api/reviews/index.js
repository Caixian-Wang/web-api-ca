import express from 'express';
import asyncHandler from 'express-async-handler';
import reviewModel from './reviewModel';

const router = express.Router();

// 新增 review
router.post('/', asyncHandler(async (req, res) => {
    const { movieId, author, content, rating } = req.body;

    if (!movieId || !author || !content || rating === undefined) {
        return res.status(400).json({
            message: 'Movie ID, author, content, and rating are required.',
        });
    }

    const newReview = new reviewModel({ movieId, author, content, rating });
    await newReview.save();
    res.status(201).json({
        message: 'Review added successfully.',
        review: newReview,
    });
}));

// 获取所有 reviews
router.get('/', asyncHandler(async (req, res) => {
    const reviews = await reviewModel.find();
    res.status(200).json({
        total_reviews: reviews.length,
        reviews,
    });
}));

// 根据作者获取 reviews
router.get('/author/:author', asyncHandler(async (req, res) => {
    const { author } = req.params;
    const reviews = await reviewModel.find({ author });

    if (reviews && reviews.length > 0) {
        res.status(200).json(reviews);
    } else {
        res.status(404).json({ message: `No reviews found for author ${author}` });
    }
}));

// 根据 ID 删除 review
router.delete('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await reviewModel.findByIdAndDelete(id);

    if (result) {
        res.status(200).json({ message: `Review with ID ${id} deleted successfully.` });
    } else {
        res.status(404).json({ message: `Review with ID ${id} not found.` });
    }
}));

export default router;