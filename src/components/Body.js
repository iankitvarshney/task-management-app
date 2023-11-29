import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <h1>Task List Application</h1>
      <Outlet />
    </div>
  );
};

export default Body;
