import { render } from "@testing-library/react";
import TaskList from "../TaskList";
import { StaticRouter } from "react-router-dom/server";

test("Add button should load on rendering TaskList", () => {
  const taskList = render(
    <StaticRouter>
      <TaskList />
    </StaticRouter>
  );

  const addButton = taskList.getByTestId("add-btn");

  expect(typeof addButton).toBe("object");
});

test("Select input should load on rendering TaskList", () => {
  const taskList = render(
    <StaticRouter>
      <TaskList />
    </StaticRouter>
  );

  const selectInput = taskList.getByTestId("sort-options");

  expect(typeof selectInput).toBe("object");
});

test("Previous button should load on rendering TaskList", () => {
  const taskList = render(
    <StaticRouter>
      <TaskList />
    </StaticRouter>
  );

  const prevButton = taskList.getByTestId("add-btn");

  expect(typeof prevButton).toBe("object");
});

test("Next button should load on rendering TaskList", () => {
  const taskList = render(
    <StaticRouter>
      <TaskList />
    </StaticRouter>
  );

  const nextButton = taskList.getByTestId("add-btn");

  expect(typeof nextButton).toBe("object");
});

test("Page number should be 1 on rendering TaskList", () => {
  const taskList = render(
    <StaticRouter>
      <TaskList />
    </StaticRouter>
  );

  const paragraph = taskList.getByTestId("current-page");

  expect(paragraph.innerHTML).toBe("1");
});
