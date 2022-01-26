import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem"

export default function ToDoList() {
    console.log("--ToDoList")

    const items = useSelector((newState) => {
        console.log("ToDoList::useSelector")
        return newState.items;
    })
    return (
        <ul>
            {items.map((item) => {
                return (
                    <ToDoItem item={item} key={item.id} />
                );
            })}
        </ul>
    )

}