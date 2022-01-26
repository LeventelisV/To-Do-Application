import { useState, useContext } from "react";
import Context from "./Context";

export default function ToDoItem({ item }) {
    const { items, setItems } = useContext(Context)

    const checkBoxClicked = () => {
        const newItems = items.filter((itemOfItems) => {
            if (itemOfItems.id === item.id) {
                itemOfItems.done = !itemOfItems.done
                return true
            }
            return true
        })
        setItems(newItems)
    };

    const deleteTask = () => {
        let newItems = [...items]
        let index = newItems.indexOf(item)
        newItems.splice(index, 1)
        setItems(newItems)
    };
    return (
        <li
            key={item.id}
            className="flex items-center justify-center space-x-3">
            <div className={item.done ? 'line-through' : ''}>{item.name}</div>
            <input type="checkbox" checked={item.done ? true : false} id={item.id} onChange={checkBoxClicked} />
            <button onClick={deleteTask}>delete</button>
        </li>
    )
}