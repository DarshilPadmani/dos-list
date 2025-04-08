import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile'; // Import the new Profile component

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} /> {/* Add the new route here */}
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;