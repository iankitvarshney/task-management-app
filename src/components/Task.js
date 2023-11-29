import { useNavigate } from "react-router-dom";

const Task = ({
  id,
  title,
  description,
  status,
  priority,
  handleDelete,
  handleStatus,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>{title}</h2>
      <input
        type="checkbox"
        onChange={() => handleStatus(id)}
        checked={status === "complete"}
      />
      <p>{description}</p>
      <p>{status}</p>
      <p>{priority}</p>
      <button onClick={() => navigate("/edit/" + id)}>Edit</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default Task;
