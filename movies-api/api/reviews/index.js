import express from 'express';
import asyncHandler from 'express-async-handler';
import reviewModel from './reviewModel';

const router = express.Router();

// 1. 获取数据库里所有的 reviews
router.get('/', asyncHandler(async (req, res) => {
    const reviews = await reviewModel.find();
    res.status(200).json({
        total_reviews: reviews.length,
        reviews,
    });
}));

// 2. 新增 review 到数据库里
router.post('/', asyncHandler(async (req, res) => {
    const { movieId, author, content, rating } = req.body;

    if (!movieId || !author || !content || rating === undefined) {
        return res.status(400).json({
            message: 'Movie ID, author, content, and rating are required.'
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

// 3. 根据 review 的 ID 删除数据库里的数据
router.delete('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;

    const result = await reviewModel.findByIdAndDelete(id);

    if (result) {
        res.status(200).json({
            message: `Review with ID ${id} deleted successfully.`
        });
    } else {
        res.status(404).json({
            message: `Review with ID ${id} not found.`
        });
    }
}));

// 4. 根据 reviews 的作者查询
router.get('/author/:author', asyncHandler(async (req, res) => {
    const { author } = req.params;

    const reviews = await reviewModel.find({ author });

    if (reviews && reviews.length > 0) {
        res.status(200).json({
            total_reviews: reviews.length,
            reviews
        });
    } else {
        res.status(404).json({
            message: `No reviews found for author ${author}.`
        });
    }
}));

export default router;
