import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { AuthContext } from "../../contexts/authContext"; // 引入 AuthContext
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavoritesIcon = ({ movie }) => {
  const moviesContext = useContext(MoviesContext);
  const authContext = useContext(AuthContext); // 获取认证状态

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    if (!authContext.isAuthenticated) {
      alert("You must log in to add movies to your favorites."); // 提示未登录
      return;
    }
    moviesContext.addToFavorites(movie); // 添加到喜欢列表
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIcon;