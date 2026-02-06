import React, { useEffect, useState } from 'react'
import axios from "axios"

const Todo = () => {
    const [task, setTask] = useState("");
    const [todo, setTodo] = useState([]);
    const [editId, setEditId] = useState(null);

    const API = "http://localhost:3000";

    const fetchData = async () => {
        try {
            const response = await axios.get(`${API}/api/todos/`);
            setTodo(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddOrUpdate = async () => {
        if (task.trim() === "") return;

        try {
            if (editId) {
                // UPDATE
                await axios.put(`${API}/api/todos/update/${editId}`, { task });
                setEditId(null);
            } else {
                // CREATE
                await axios.post(`${API}/api/todos/create`, { task });
            }

            setTask("");
            fetchData();
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API}/api/todos/delete/${id}`);
            fetchData();
        } catch (err) {
            console.log(err);
        }
    };

    const handleToggleComplete = async (item) => {
        try {
            await axios.put(`${API}/api/todos/update/${item._id}`, {
                task: item.task,
                completed: !item.completed
            });
            fetchData();
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddOrUpdate();
    };

    return (
        <div style={{ maxWidth: "500px", margin: "20px auto" }}>
            <h1>Todo</h1>

            <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="enter the task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    style={{ padding: "8px", width: "70%" }}
                />
                <button type="submit" style={{ padding: "8px 12px", marginLeft: "8px" }}>
                    {editId ? "Update" : "Add"}
                </button>
            </form>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {todo.map((item) => (
                    <li
                        key={item._id}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "10px",
                            marginBottom: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "6px"
                        }}
                    >
                        <span
                            onClick={() => handleToggleComplete(item)}
                            style={{
                                textDecoration: item.completed ? "line-through" : "none",
                                cursor: "pointer",
                                flex: 1
                            }}
                        >
                            {item.task}
                        </span>

                        <button
                            onClick={() => {
                                setTask(item.task);
                                setEditId(item._id);
                            }}
                            style={{ marginRight: "6px" }}
                        >
                            Edit
                        </button>

                        <button onClick={() => handleDelete(item._id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;