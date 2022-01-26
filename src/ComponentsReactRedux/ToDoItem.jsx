
import { useSelector, useDispatch } from "react-redux";

export default function ToDoItem({ item }) {
  const dispatch = useDispatch();

  const toggleItem = () => {
    dispatch({ type: "Toggle", item });
  };

  const deleteTask = () => {
    dispatch({ type: "DeleteItem", item });
  };
  return (
    <li key={item.id} className="flex items-center justify-center space-x-3">
      <div className={item.done ? "line-through" : ""}>{item.name}</div>
      <input
        type="checkbox"
        checked={item.done ? true : false}
        id={item.id}
        onChange={toggleItem}
      />
      <button onClick={deleteTask}>delete</button>
    </li>
  );
}
