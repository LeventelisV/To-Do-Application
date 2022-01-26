import React, { useRef, useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ToDoList from "./ToDoList";
import UserInput from "./UserInput";
import ShowItems from "./ShowItems"
console.clear();
const log = (item) => console.log(item)

function reducer(state = { items: [], excludeItems: [] }, action) {
  if (action.type === "AddItem") {
    return { ...state, items: state.items.concat(action.item) };
  }
  if (action.type === "DeleteItem") {
    const newItems = state.items.filter((item) => item.id !== action.item.id);
    return { ...state, items: newItems };
  }
  if (action.type === "Toggle") {
    const newItems = state.items.map((item) => {
      if (item.id === action.item.id) {
        item.done = !item.done;
      }
      return item;
    });
    return { ...state, items: newItems };
  }
  if (action.type === "ShowUndoneCheckboxToggled") {
    if (action.event) {
      let undoneItems = []
      let excludeItems = []
      state.items.map((item) => {
        if (!item.done) {
          return undoneItems.push(item)
        }
        excludeItems.push(item)
      })
      return { ...state, items: undoneItems, excludeItems: excludeItems }

    }
    return { ...state, items: state.items.concat(state.excludeItems), excludeItems: [] }
  }
  return state;
}

const store = createStore(reducer);


export default function App() {
  return (
    <div className="App text-center">
      <Provider store={store}>
        {/* <ItemStatus /> */}
        <ShowItems />
        <UserInput />
        <ToDoList />
      </Provider>
    </div>
  );
}
