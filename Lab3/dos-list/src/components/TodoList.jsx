import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

const TodoList = () => {
    const [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    });

    const [newTask, setNewTask] = useState("");  // ✅ Define newTask
    const [filter, setFilter] = useState("all");
    const [dueDate, setDueDate] = useState("");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false, dueDate }]);
            setNewTask("");
            setDueDate("");
        }
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (id, newText) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
    };

    const filteredTasks = tasks.filter(task =>
        filter === "all" ? true : filter === "completed" ? task.completed : !task.completed
    );

    return (
        <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg mt-6">
            <div className="flex gap-2">
                <input
                    type="text"
                    className="flex-grow p-2 border rounded"
                    placeholder="Add a new task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <input
                    type="date"
                    className="p-2 border rounded"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
                <button onClick={addTask} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Add
                </button>
            </div>

            <div className="flex justify-between mt-4">
                <button onClick={() => setFilter("all")} className="text-blue-600">All</button>
                <button onClick={() => setFilter("completed")} className="text-green-600">Completed</button>
                <button onClick={() => setFilter("pending")} className="text-red-600">Pending</button>
            </div>

            <ul className="mt-4">
                {filteredTasks.length === 0 ? <p className="text-center text-gray-500">No tasks found.</p> : null}
                {filteredTasks.map(task => (
                    <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
