import { useState } from "react";

export default function ToDoItem({ item, items, setItems }) {
    const [taskState, setTaskState] = useState("undone")

    const checkBoxClicked = (event) => {
        if (event.target.checked) {
            item.done = true
            return setTaskState("done")
        }
        item.done = false
        return setTaskState("undone")
    };

    const deleteTask = () => {
        let newItems = [...items]
        let index = newItems.indexOf(item)
        newItems.splice(index,1)
        setItems(newItems)
    };
    return (
        <li
            key={item.id}
            className="flex items-center justify-center space-x-3">
            <div className={item.done ? 'line-through' : ''}>{item.name}</div>
            <input type="checkbox" id={item.id} onChange={checkBoxClicked} />
            <button onClick={deleteTask}>delete</button>
        </li>
    )
}