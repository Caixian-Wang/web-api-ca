import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const username = localStorage.getItem("username"); // Let's say you saved your username when you log in
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
                } else {
                    navigate("/login"); // If the authentication fails, you will be redirected to log in
                }
            } catch (error) {
                console.error("Failed to get user data:", error);
                navigate("/login");
            }
        };

        fetchUserData();
    }, [navigate]);

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
            {userData.commentedMovies.length > 0 ? (
                <ul>
                    {userData.commentedMovies.map(movie => (
                        <li key={movie._id}>{movie.title}</li>
                    ))}
                </ul>
            ) : (
                <p>There are no reviews for the movie yet</p>
            )}
        </div>
    );
};

export default ProfilePage;