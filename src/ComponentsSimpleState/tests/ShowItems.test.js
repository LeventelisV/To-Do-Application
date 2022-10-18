import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ShowItems from "../ShowItems";
// import mockItems from "../../mock/items.js"
// import items from "../../mock/items.js";


describe("ShowItems", () => {
  test("should load show undone label", () => {
    render(<ShowItems />);
    expect(screen.getByLabelText("Show Undone")).toBeInTheDocument();
  });

  test("should load unchecked checkbox", () => {
    render(<ShowItems />);
    expect(document.getElementById("show-undone").checked).toEqual(false);
  });

  test("should me able to check and uncheck checkbox",async () => {
    render(<ShowItems items={[]} setItems={()=>{}}/>);
    const user = userEvent.setup()
    const checkbox = screen.getByTestId("show-undone")
    expect(checkbox.checked).toEqual(false);
    await user.click(checkbox)
    expect(checkbox.checked).toEqual(true);
    await user.click(checkbox)
    expect(checkbox.checked).toEqual(false);
  })
});
