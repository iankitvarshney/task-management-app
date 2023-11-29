import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="body">
      <h1>Task List</h1>
      <Outlet />
    </div>
  );
};

export default Body;
