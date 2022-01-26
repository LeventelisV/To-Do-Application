import ToDoItem from "./ToDoItem"
import Context from "./Context";
import { useContext } from "react";

export default function ToDoList() {
    const { items, setItems } = useContext(Context)

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