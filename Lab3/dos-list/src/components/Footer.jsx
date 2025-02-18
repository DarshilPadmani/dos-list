import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white text-center py-3 mt-6">
            <p className="text-sm">© {new Date().getFullYear()} My To-Do App. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
