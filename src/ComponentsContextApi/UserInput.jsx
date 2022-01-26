import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Context from './Context';
import ItemStatus from './ItemStatus';


export default function UserInput() {
    const { items, setItems } = useContext(Context)

    const [userInput, setUserInput] = useState("");

    const inputChange = (event) => setUserInput(event.target.value);

    const buttonClicked = () => {
        if (userInput !== "") {
            let uid = uuidv4()
            let item = { id: uid, name: userInput, done: false }
            setItems(items.concat(item));
            setUserInput("");
        }
    };


    return (
        <>
            <form
                className="mt-20 mb-44 text-center"
                onSubmit={(event) => event.preventDefault()}
            >
                <label htmlFor="toDoItem">Add toDo: </label>
                <input
                    className="border border-black rounded"
                    onChange={inputChange}
                    value={userInput}
                    type="text"
                    id="toDoItem"
                    name="toDoItem"
                />
                <button
                    className="bg-yellow-500 px-2 rounded ml-2"
                    onClick={buttonClicked}
                >
                    Add
                </button>
            </form>
            <ItemStatus />
        </>
    )

}