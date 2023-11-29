import { render } from "@testing-library/react";
import EditTask from "../EditTask";
import { StaticRouter } from "react-router-dom/server";

test("Heading should load on rendering EditTask", () => {
  const editTask = render(
    <StaticRouter>
      <EditTask />
    </StaticRouter>
  );

  const heading = editTask.getByTestId("heading");

  expect(heading.innerHTML).toBe("Edit Task");
});

test("Form element should load on rendering EditTask", () => {
  const editTask = render(
    <StaticRouter>
      <EditTask />
    </StaticRouter>
  );

  const form = editTask.getByTestId("form");

  expect(typeof form).toBe("object");
});

test("Edit Task button should load on rendering EditTask", () => {
  const editTask = render(
    <StaticRouter>
      <EditTask />
    </StaticRouter>
  );

  const editTaskBtn = editTask.getByTestId("edit-task-btn");

  expect(editTaskBtn.innerHTML).toBe("Edit Task");
});
