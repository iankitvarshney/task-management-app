import { render } from "@testing-library/react";
import AddTask from "../AddTask";
import { StaticRouter } from "react-router-dom/server";

test("Heading should load on rendering AddTask", () => {
  const addTask = render(
    <StaticRouter>
      <AddTask />
    </StaticRouter>
  );

  const heading = addTask.getByTestId("heading");

  expect(heading.innerHTML).toBe("Add Task");
});

test("Form element should load on rendering AddTask", () => {
  const addTask = render(
    <StaticRouter>
      <AddTask />
    </StaticRouter>
  );

  const form = addTask.getByTestId("form");

  expect(typeof form).toBe("object");
});

test("Add Task button should load on rendering AddTask", () => {
  const addTask = render(
    <StaticRouter>
      <AddTask />
    </StaticRouter>
  );

  const addTaskBtn = addTask.getByTestId("add-task-btn");

  expect(addTaskBtn.innerHTML).toBe("Add Task");
});
