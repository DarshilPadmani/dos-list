import React from "react";
import "tailwindcss/tailwind.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import TaskList from "./components/Tasklist";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <Header />
      <main className="flex-grow">
        <TodoList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
