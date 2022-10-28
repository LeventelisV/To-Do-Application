import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import items from "../../mock/items.js";
import ItemStatus from "../ItemStatus.jsx";

beforeEach(()=>{
    render(<ItemStatus items={items}/>)
})

describe("ItemStatus",()=>{
    test("element with correct number of undone items should be in the dom",()=>{
        expect(screen.getByText("Your undone tasks are: 2")).toBeInTheDocument();
    })
})