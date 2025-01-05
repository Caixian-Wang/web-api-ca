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
                const userResponse = await fetch("/api/user/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const userData = await userResponse.json();

                const commentsResponse = await fetch("/api/user/comments", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const commentsData = await commentsResponse.json();

                const favoritesResponse = await fetch("/api/user/favorites", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const favoritesData = await favoritesResponse.json();

                setUserData(userData);
                setUserComments(commentsData);
                setUserFavorites(favoritesData);
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
            <h1>{userData.name}'s Profile</h1>
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
                            <li key={comment.id}>
                                <strong>{comment.movieTitle}:</strong> {comment.content}
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
                            <li key={movie.id}>{movie.title}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
