import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import items from "../../mock/items.js";

import UserInput from "../UserInput";

beforeEach(() => {
  const setItemsMockFn = jest.fn();
  render(<UserInput items={items} setItems={setItemsMockFn} />);
});

describe("UserInput", () => {
  test("label should be in the dom", () => {
    expect(screen.getByLabelText("Add toDo:")).toBeInTheDocument();
  });

  test("input should be in the dom  and empty", () => {
    expect(screen.getByLabelText("user-input")).toBeInTheDocument();
    expect(screen.getByLabelText("user-input").value).toBe("");
  });

  test("should button to be to the dom", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
