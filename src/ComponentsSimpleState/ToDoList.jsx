import ToDoItem from "./ToDoItem"

export default function ToDoList({ items, setItems, taskRender, setTaskRender }) {
    // console.log('ToDoList')
    return (
        <div className="m-auto w-1/4">
            <table className=" table-auto m-auto w-full  mt-4">
                <tbody className="">
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
                </tbody>
            </table>
        </div>
    )

}