import { useState } from "react";

export default function ToDoItem({ item, items, setItems, taskRender, setTaskRender }) {
    // console.log('ToDoItem')

    const checkBoxClicked = (event) => {
        if (event.target.checked) {
            console.log('clicked')
            item.done = true
            return setTaskRender(!taskRender)
        }
        item.done = false
        console.log('unclicked')
        return setTaskRender(!taskRender)
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
            <input type="checkbox" id={item.id} onChange={checkBoxClicked} checked={item.done}/>
            <button onClick={deleteTask}>delete</button>
        </li>
    )
}