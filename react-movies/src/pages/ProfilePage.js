import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addReview, deleteReviewById, getReviewsByAuthor } from "../api/local-api"; 

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [newReview, setNewReview] = useState({ movieId: "", content: "", rating: 0 });
    const [authorReviews, setAuthorReviews] = useState([]);
    const navigate = useNavigate();

    // 独立的 fetchAuthorReviews 函数
    const fetchAuthorReviews = async (author) => {
        try {
            const reviews = await getReviewsByAuthor(author);
            setAuthorReviews(reviews);
        } catch (error) {
            console.error("Failed to fetch reviews by author:", error);
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            const username = localStorage.getItem("username");
            const token = localStorage.getItem("token");
            if (!token) {
                navigate("/login");
                return;
            }

            try {
                const response = await fetch(`http://localhost:8080/api/users/${username}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                const result = await response.json();
                if (result.success) {
                    setUserData(result.data);
                    fetchAuthorReviews(username); // 在这里调用 fetchAuthorReviews
                } else {
                    navigate("/login");
                }
            } catch (error) {
                console.error("Failed to get user data:", error);
                navigate("/login");
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleAddReview = async () => {
        const username = localStorage.getItem("username"); // 从本地存储中获取登录的用户名
        if (!username) {
            alert("You must be logged in to add a review.");
            navigate("/login");
            return;
        }

        const reviewData = {
            ...newReview,
            author: username, // 添加作者字段
        };

        try {
            await addReview(reviewData);
            alert("Review added successfully");
            setNewReview({ movieId: "", content: "", rating: 0 });
            fetchAuthorReviews(username); // 更新用户的评论列表
        } catch (error) {
            alert("Failed to add review: " + error.message);
        }
    };

    const handleDeleteReview = async (id) => {
        try {
            await deleteReviewById(id);
            alert("Review deleted successfully");
            setAuthorReviews(authorReviews.filter(review => review._id !== id));
        } catch (error) {
            alert("Failed to delete review: " + error.message);
        }
    };

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Personal interface</h2>
            <h3>Favorite movies</h3>
            {userData.favoriteMovies.length > 0 ? (
                <ul>
                    {userData.favoriteMovies.map(movie => (
                        <li key={movie._id}>{movie.title}</li>
                    ))}
                </ul>
            ) : (
                <p>There are no favorites</p>
            )}
            <h3>Reviewed films</h3>
            {authorReviews.length > 0 ? (
                <ul>
                    {authorReviews.map(review => (
                        <li key={review._id}>
                            Movie ID: {review.movieId}, Rating: {review.rating}, Content: {review.content}
                            <button onClick={() => handleDeleteReview(review._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>There are no reviews for the movie yet</p>
            )}
            <h3>Add a Review</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleAddReview(); }}>
                <label>
                    Movie ID:
                    <input
                        type="text"
                        value={newReview.movieId}
                        onChange={(e) => setNewReview({ ...newReview, movieId: e.target.value })}
                    />
                </label>
                <label>
                    Content:
                    <textarea
                        value={newReview.content}
                        onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                    />
                </label>
                <label>
                    Rating:
                    <input
                        type="number"
                        min="0"
                        max="10"
                        value={newReview.rating}
                        onChange={(e) => setNewReview({ ...newReview, rating: +e.target.value })}
                    />
                </label>
                <button type="submit">Add Review</button>
            </form>
        </div>
    );
};

export default ProfilePage;