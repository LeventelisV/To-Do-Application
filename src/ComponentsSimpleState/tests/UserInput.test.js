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

  test("should be able to write to the input",async () => {
    const inputElement = screen.getByLabelText("user-input")
    await userEvent.type(inputElement,"test")
    expect(inputElement.value).toBe("test")
  });
  test("should be the input empty after the button is clicked",async () => {
    const inputElement = screen.getByLabelText("user-input")
    const buttonElement = screen.getByRole("button")
    await userEvent.type(inputElement,"test")
    await userEvent.click(buttonElement)
    expect(inputElement.value).toBe("")
  });
});
