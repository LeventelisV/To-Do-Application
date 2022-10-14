import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import ShowItems from "../ShowItems";

describe("ShowItems", () => {
  test("should load show undone label", () => {
    render(<ShowItems />);
    expect(screen.getByLabelText("Show Undone")).toBeInTheDocument()
  });
});
