import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addReview, deleteReviewById, getReviewsByAuthor } from "../api/local-api"; 
import '../styles.css';

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [newReview, setNewReview] = useState({ movieId: "", content: "", rating: 0 });
    const [authorReviews, setAuthorReviews] = useState([]);
    const navigate = useNavigate();

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
                    fetchAuthorReviews(username);
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
        const username = localStorage.getItem("username");
        if (!username) {
            alert("You must be logged in to add a review.");
            navigate("/login");
            return;
        }

        const reviewData = {
            ...newReview,
            author: username,
        };

        try {
            await addReview(reviewData);
            alert("Review added successfully");
            setNewReview({ movieId: "", content: "", rating: 0 });
            fetchAuthorReviews(username);
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
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="container">
            <h2 className="title">Personal Interface</h2>
            <h3 className="subtitle">Reviewed Films</h3>
            {authorReviews.length > 0 ? (
                <ul className="review-list">
                    {authorReviews.map(review => (
                        <li key={review._id} className="review-item">
                            <p><strong>Movie ID:</strong> {review.movieId}</p>
                            <p><strong>Rating:</strong> {review.rating}</p>
                            <p><strong>Content:</strong> {review.content}</p>
                            <button onClick={() => handleDeleteReview(review._id)} className="delete-button">Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>There are no reviews for the movie yet</p>
            )}
            <h3 className="subtitle">Add a Review</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleAddReview(); }} className="form">
                <label>
                    Movie ID:
                    <input
                        type="text"
                        value={newReview.movieId}
                        onChange={(e) => setNewReview({ ...newReview, movieId: e.target.value })}
                        className="input"
                    />
                </label>
                <label>
                    Content:
                    <textarea
                        value={newReview.content}
                        onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                        className="textarea"
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
                        className="input"
                    />
                </label>
                <button type="submit" className="submit-button">Add Review</button>
            </form>
        </div>
    );
};

export default ProfilePage;