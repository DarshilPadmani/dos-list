import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (data.token) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("userId", data.userId);
            alert("Login Successful!");
            navigate("/");  // Redirect to home page
        } else {
            alert(data.error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <input
                type="email" placeholder="Email"
                className="w-full p-2 border rounded mb-2"
                value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password" placeholder="Password"
                className="w-full p-2 border rounded mb-2"
                value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded">
                Login
            </button>
        </div>
    );
};

export default Login;
