// 示例：调用自己后端的“获取所有电影”接口
export const getLocalMovies = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/movies");
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  };
  
  // 示例：调用自己后端的“即将上映电影”接口
  export const getLocalUpcomingMovies = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/movies/tmdb/upcoming");
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  };

  export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
      headers: {
        'Content-Type': 'application/json',
      },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.msg || "SignUp failed.");
    }

    return response.json();
};

// 示例：调用自己后端的“获取所有 reviews”接口
export const getAllReviews = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/reviews");
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

// 示例：调用自己后端的“新增 review”接口
export const addReview = async (reviewData) => {
  try {
    const response = await fetch("http://localhost:8080/api/reviews", {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(reviewData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add review");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

// 示例：调用自己后端的“根据 review ID 删除”接口
export const deleteReviewById = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/reviews/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete review");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

// 示例：调用自己后端的“根据作者查询 reviews”接口
export const getReviewsByAuthor = async (author) => {
  try {
    const response = await fetch(`http://localhost:8080/api/reviews/author/${author}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch reviews by author");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
