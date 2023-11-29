import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorageData } from "../constants";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const navigate = useNavigate();
  const items = getLocalStorageData();

  return (
    <div className="add-task">
      <h1 data-testid="heading">Add Task</h1>
      <form
        data-testid="form"
        onSubmit={(e) => {
          e.preventDefault();
          const item = {
            id: title,
            title: title,
            description: description,
            status: "incomplete",
            priority: priority,
          };
          localStorage.setItem("tasks", JSON.stringify([item, ...items]));
          navigate("/");
        }}
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="" disabled>
            Select
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button data-testid="add-task-btn" className="add-task-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
