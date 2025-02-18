import React, { useState } from "react";

const TaskItem = ({ task, toggleTask, deleteTask, editTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    return (
        <li className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md mb-2">
            {isEditing ? (
                <input
                    className="border p-1 rounded w-full"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) : (
                <span
                    className={`flex-grow ${task.completed ? "line-through text-gray-500" : "cursor-pointer"}`}
                    onClick={() => toggleTask(task.id)}
                >
                    {task.text} - <span className="text-sm text-gray-500">{task.dueDate}</span>
                </span>
            )}

            {isEditing ? (
                <button onClick={() => { editTask(task.id, newText); setIsEditing(false); }} className="bg-green-500 text-white px-2 py-1 rounded ml-2">Save</button>
            ) : (
                <button onClick={() => setIsEditing(true)} className="text-blue-500 mr-2">✏️</button>
            )}

            <button onClick={() => deleteTask(task.id)} className="text-red-500">❌</button>
        </li>
    );
};

export default TaskItem;
