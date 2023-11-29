import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorageData } from "../constants";
import Task from "./Task";

const TaskList = () => {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [sortMethod, setSortMethod] = useState("none");
  const [tasks, setTasks] = useState(getLocalStorageData());
  const [filteredTasks, setFilteredTasks] = useState(getLocalStorageData());
  const [perPageTasks, setPerPageTasks] = useState(getPerPageTasks());
  const [totalPages, setTotalPages] = useState(
    Math.ceil(filteredTasks.length / itemsPerPage)
  );

  const navigate = useNavigate();

  useEffect(() => {
    setPerPageTasks(getPerPageTasks());
  }, [page]);

  useEffect(() => {
    setPerPageTasks(getPerPageTasks());
    setTotalPages(Math.ceil(filteredTasks.length / itemsPerPage));
  }, [filteredTasks]);

  useEffect(() => {
    handleSortMethod(sortMethod);
  }, [tasks]);

  function getPerPageTasks() {
    return filteredTasks.slice(itemsPerPage * (page - 1), itemsPerPage * page);
  }

  function handleDelete(id) {
    const items = tasks.filter((task) => task.title != id);
    setTasks(items);
    localStorage.setItem("tasks", JSON.stringify(items));
  }

  function getIndex(id) {
    for (const index in tasks) {
      if (tasks[index].title == id) {
        return index;
      }
    }
  }

  function handleStatus(id) {
    const items = tasks;
    const index = getIndex(id);
    const prevItems = items.slice(0, index);
    const nextItems = items.slice(index + 1);
    const prevStatus = items[index].status;
    const item = {
      ...items[index],
      status: prevStatus === "incomplete" ? "complete" : "incomplete",
    };
    localStorage.setItem(
      "tasks",
      JSON.stringify([...prevItems, item, ...nextItems])
    );
    setTasks(getLocalStorageData());
  }

  function sortLowPriorityTasks() {
    const items = tasks.filter((task) => task.priority === "low");
    setFilteredTasks(items);
  }
  function sortMediumPriorityTasks() {
    const items = tasks.filter((task) => task.priority === "medium");
    setFilteredTasks(items);
  }
  function sortHighPriorityTasks() {
    const items = tasks.filter((task) => task.priority === "high");
    setFilteredTasks(items);
  }
  function sortIncompleteTasks() {
    const items = tasks.filter((task) => task.status === "incomplete");
    setFilteredTasks(items);
  }
  function sortCompleteTasks() {
    const items = tasks.filter((task) => task.status === "complete");
    setFilteredTasks(items);
  }
  function showAllTasks() {
    setFilteredTasks(tasks);
  }

  function handleSortMethod(value) {
    if (value === "none") {
      showAllTasks();
    } else if (value === "low") {
      sortLowPriorityTasks();
    } else if (value === "medium") {
      sortMediumPriorityTasks();
    } else if (value === "high") {
      sortHighPriorityTasks();
    } else if (value === "incomplete") {
      sortIncompleteTasks();
    } else if (value === "complete") {
      sortCompleteTasks();
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          navigate("/add");
        }}
      >
        Add Task
      </button>
      <p>TaskList</p>

      {page > 1 && <button onClick={() => setPage(page - 1)}>Previous</button>}
      {page < totalPages && (
        <button onClick={() => setPage(page + 1)}>Next</button>
      )}
      <p>Page - {page}</p>

      <select
        value={sortMethod}
        onChange={(e) => {
          setSortMethod(e.target.value);
          handleSortMethod(e.target.value);
        }}
      >
        <option value="none">None</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </select>

      {perPageTasks.map((task, index) => (
        <Task
          key={task.id + index}
          id={task.id}
          title={task.title}
          description={task.description}
          status={task.status}
          priority={task.priority}
          handleDelete={(id) => handleDelete(id)}
          handleStatus={(id) => handleStatus(id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
