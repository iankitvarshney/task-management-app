import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLocalStorageData } from "../constants";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const items = getLocalStorageData();
  const index = getIndex(id);

  const [title, setTitle] = useState(items[index].title);
  const [description, setDescription] = useState(items[index].description);
  const [priority, setPriority] = useState(items[index].priority);

  function getIndex(id) {
    for (const index in items) {
      if (items[index].id == id) {
        return index;
      }
    }
  }

  function handleEdit() {
    const index = parseInt(getIndex(id));
    const prevItems = items.slice(0, index);
    const nextItems = items.slice(index + 1);
    const item = {
      ...items[index],
      id: title,
      title: title,
      description: description,
      priority: priority,
    };
    localStorage.setItem(
      "tasks",
      JSON.stringify([...prevItems, item, ...nextItems])
    );
    navigate("/");
  }

  return (
    <div className="edit-task">
      <h1>Edit Task</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="description"
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
        <button className="edit-task-btn" onClick={handleEdit}>
          Edit Task
        </button>
      </form>
    </div>
  );
};

export default EditTask;
