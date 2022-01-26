import ToDoItem from "./ToDoItem"

export default function ToDoList({ items, setItems }) {
    return (
        <ul>
            {items.map((item) => {
                return (
                    <ToDoItem item={item} items={items} setItems={setItems} key={item.id} />
                );
            })}
        </ul>
    )

}