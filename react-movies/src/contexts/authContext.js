import React, { useState, createContext } from "react";
import { login, signup } from "../api/local-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(!!existingToken); 
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState(localStorage.getItem("username") || ""); 

  // Function to store JWT token in localStorage and update state
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  };

  // Function to handle authentication (login)
  const authenticate = async (username, password) => {
    try {
      const result = await login(username, password);
      if (result.token) {
        setToken(result.token);
        setIsAuthenticated(true);
        setUserName(username);
        localStorage.setItem("username", username);
      } else {
        throw new Error(result.msg || "Login failed.");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      return { success: false, msg: error.message };
    }
  };

  // Function to handle user registration
  const register = async (username, password) => {
    try {
      const result = await signup(username, password);
      if (result.code === 201) {
        return { success: true };
      } else {
        throw new Error(result.msg || "SignUp failed.");
      }
    } catch (error) {
      console.error("SignUp failed:", error.message);
      return { success: false, msg: error.message };
    }
  };

  // Function to handle user sign out
  const signout = () => {
    setIsAuthenticated(false);
    setAuthToken(null);
    setUserName("");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        userName,
        authToken, 
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;