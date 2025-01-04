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
            'Content-Type': 'application/json'
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
    return response.json();
};