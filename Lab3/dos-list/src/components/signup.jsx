import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        const res = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await res.json();
        if (res.status === 201) {
            alert("Signup Successful! Please Login.");
            navigate("/login"); // Redirect to login page
        } else {
            alert(data.error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded">
            <h2 className="text-xl font-bold mb-4">Signup</h2>
            <input
                type="text" placeholder="Name"
                className="w-full p-2 border rounded mb-2"
                value={name} onChange={(e) => setName(e.target.value)}
            />
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
            <button onClick={handleSignup} className="w-full bg-green-500 text-white p-2 rounded">
                Signup
            </button>
        </div>
    );
};

export default Signup;
