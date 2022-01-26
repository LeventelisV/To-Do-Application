import React, { useRef, useState } from "react";
import ToDoList from "./ToDoList";
import UserInput from "./UserInput";


// Ideally you must refactor the app 3 times:
// 1) using useState()
// 2) using Context API
// 3) using Redux

// uuid for the keys
// State Structure: list = [{ id: Number, task: String, done: Boolean }, {....}]
// <TodoItem item={{ id, task, done }}  />

/* 
Planning and Managing the State: start as specific as possible and move up according
to the needs of the app.
<Navbar></Navbar>
<App>
  // App State / Context API / Redux
    <TodoInput></TodoInput>
    <TodoList>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </TodoList>
  // App State
</App>
*/
export default function App() {
    const [items, setItems] = useState([]);

    return (
        <div className="App text-center">
            <UserInput items={items} setItems={setItems}/>
            <ToDoList items={items} setItems={setItems} />
        </div>
    );
}
