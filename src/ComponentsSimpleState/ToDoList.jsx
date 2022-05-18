import ToDoItem from "./ToDoItem"

export default function ToDoList({ items, setItems, taskRender, setTaskRender }) {
    // console.log('ToDoList')
    return (
        <ul>
            {items.map((item) => {
                return (
                    <ToDoItem
                        item={item}
                        items={items}
                        setItems={setItems}
                        key={item.id}
                        taskRender={taskRender}
                        setTaskRender={setTaskRender} />
                );
            })}
        </ul>
    )

}