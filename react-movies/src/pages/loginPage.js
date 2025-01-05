import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";

const LoginPage = props => {
    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 

    const login = async () => {
        try {
            const result = await context.authenticate(userName, password); 
            if (result.success) {
                localStorage.setItem("token", result.token);
                localStorage.setItem("username", userName);

                setError("");
            } else {
                setError(result.msg || "Failed to log in, please try again later");
            }
        } catch (e) {
            setError("Can't log in, please check the network or try again later");
        }
    };

    let location = useLocation();

    // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
    const { from } = location.state ? { from: location.state.from.pathname } : { from: { pathname: "/profile" } };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} replace />;
    }

    return (
        <>
            <h2>Login</h2>
            <p>You must be logged in to view protected pages</p>
            {error && <p style={{ color: "red" }}>{error}</p>} {/* New: Show error message */}
            <input
                id="username"
                placeholder="username"
                value={userName}
                onChange={e => setUserName(e.target.value)}
            /><br />
            <input
                id="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            /><br />
            {/* Login */}
            <button onClick={login}>Login</button>
            <p>Not yet SignUp?
                <Link to="/signup">SignUp ！</Link>
            </p>
        </>
    );
};

export default LoginPage;