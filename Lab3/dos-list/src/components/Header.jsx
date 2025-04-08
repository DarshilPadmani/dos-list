import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate("/login");
    };

    return (
        <header className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center py-4 shadow-md flex justify-between px-6">
            <h1 className="text-2xl font-bold">My To-Do App 🚀</h1>
            <div>
                {token ? (
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Logout
                    </button>
                ) : (
                    <>
                        <button
                            onClick={() => navigate("/login")}
                            className="bg-white text-blue-600 px-4 py-2 rounded mr-2 hover:bg-gray-200"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => navigate("/signup")}
                            className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-gray-200"
                        >
                            Signup
                        </button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;