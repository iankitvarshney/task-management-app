import { useNavigate } from "react-router-dom";
import { CheckedIcon, CloseIcon, EditIcon, UncheckedIcon } from "../icons";

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
    <div className="task">
      <div className="task-head">
        <div>
          <button className="check-btn" onClick={() => handleStatus(id)}>
            {status === "complete" ? <CheckedIcon /> : <UncheckedIcon />}
          </button>
          <h2
            style={{
              textDecoration: status === "complete" ? "line-through" : "none",
            }}
          >
            {title}
          </h2>
        </div>

        <div>
          <button onClick={() => navigate("/edit/" + id)}>
            <EditIcon />
          </button>
          <button onClick={() => handleDelete(id)}>
            <CloseIcon />
          </button>
        </div>
      </div>
      <div className="task-body">
        <p
          style={{
            textDecoration: status === "complete" ? "line-through" : "none",
          }}
        >
          {description}
        </p>
      </div>

      <div className="task-stats">
        <p>Priority: {priority.charAt(0).toUpperCase() + priority.slice(1)}</p>
      </div>
    </div>
  );
};

export default Task;
