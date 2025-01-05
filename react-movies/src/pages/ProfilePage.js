import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [userComments, setUserComments] = useState([]);
    const [userFavorites, setUserFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate("/login");
                return;
            }

            try {
                const userResponse = await fetch("/api/users/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (!userResponse.ok) {
                    throw new Error("Failed to fetch user profile");
                }

                const userData = await userResponse.json();

                setUserData(userData);
                setUserComments(userData.commentedMovies || []);
                setUserFavorites(userData.favoriteMovies || []);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [navigate]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-page">
            <h1>{userData.username}'s Profile</h1>
            <div className="user-info">
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Username:</strong> {userData.username}</p>
            </div>

            <div className="user-comments">
                <h2>Your Comments</h2>
                {userComments.length === 0 ? (
                    <p>You haven't commented on any movies yet.</p>
                ) : (
                    <ul>
                        {userComments.map((comment) => (
                            <li key={comment._id}>
                                <strong>{comment.title}:</strong> {comment.content}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="user-favorites">
                <h2>Your Favorites</h2>
                {userFavorites.length === 0 ? (
                    <p>You haven't added any favorites yet.</p>
                ) : (
                    <ul>
                        {userFavorites.map((movie) => (
                            <li key={movie._id}>{movie.title}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;

