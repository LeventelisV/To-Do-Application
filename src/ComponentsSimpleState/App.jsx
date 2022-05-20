import React, { useRef, useState } from "react";
import ToDoList from "./ToDoList";
import UserInput from "./UserInput";
import ShowItems from "./ShowItems"


export default function App() {
    const [items, setItems] = useState([]);
    const [taskRender, setTaskRender] = useState(false)


    return (
        <div className="m-16 rounded-lg shadow-xl border min-h-screen  text-center">
            <ShowItems items={items} setItems={setItems}/>
            <UserInput items={items} setItems={setItems}/>
            <ToDoList items={items} setItems={setItems} taskRender={taskRender} setTaskRender={setTaskRender} />
        </div>
    );
}
