import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState(""); 

  const register = async () => {
    setError(""); 
    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);

    if (!userName) {
      setError("The username cannot be empty");
      return;
    }

    if (!validPassword) {
      setError("The password must contain at least 8 characters, including letters, numbers, and special characters");
      return;
    }

    if (password !== passwordAgain) {
      setError("The password entered twice is inconsistent");
      return;
    }

    try {
      const result = await context.register(userName, password);
      if (result.success) {
        setRegistered(true); // 注册成功
      } else {
        setError(result.msg || "Registration failed, please try again later");
      }
    } catch (err) {
      setError("Unable to complete the registration, please check the network or try again later");
    }
  };

  if (registered === true) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h2>SignUp</h2>
      <p>You must register a username and password to log in</p>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Show error message */}
      <input
        value={userName}
        placeholder="username"
        onChange={e => {
          setUserName(e.target.value);
        }}
      /><br />
      <input
        value={password}
        type="password"
        placeholder="password"
        onChange={e => {
          setPassword(e.target.value);
        }}
      /><br />
      <input
        value={passwordAgain}
        type="password"
        placeholder="Confirm your password"
        onChange={e => {
          setPasswordAgain(e.target.value);
        }}
      /><br />
      <button onClick={register}>SignUp</button>
    </>
  );
};

export default SignUpPage;