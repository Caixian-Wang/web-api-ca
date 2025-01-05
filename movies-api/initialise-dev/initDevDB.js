import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import users from './users';
import movies from './movies';
import reviews from './reviews'; // 导入 reviews 数据
import User from '../api/users/userModel';
import Movie from '../api/movies/movieModel';
import Review from '../api/reviews/reviewModel'; // 导入 Review 模型

async function main() {
    if (process.env.NODE_ENV !== 'development') {
        console.log('This script is only for the development environment.');
        return;
    }
    await mongoose.connect(process.env.MONGO_DB);
    // Drop collections
    await User.collection.drop().catch(err => console.log('User collection not found'));
    await Movie.collection.drop().catch(err => console.log('Movie collection not found'));
    await Review.collection.drop().catch(err => console.log('Review collection not found')); // 删除 reviews 集合

    await User.create(users);
    await Movie.create(movies);
    await Review.create(reviews); // 添加 reviews 数据

    console.log('Database initialised');
    console.log(`${users.length} users loaded`);
    console.log(`${movies.length} movies loaded`);
    console.log(`${reviews.length} reviews loaded`); // 输出 reviews 加载信息

    await mongoose.disconnect();
}

main();