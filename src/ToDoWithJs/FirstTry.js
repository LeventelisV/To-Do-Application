import { useRef, useState } from "react";
import "./styles.css";

export default function FirstTry() {
  // const  inputChanged = (event)=> setItem(item.concat(event.target.value))
  const inputChange = (event) => setUserInput(event.target.value);
  const [userInput, setUserInput] = useState("");
  // const  inputChanged = (event)=> setI(addedItems.concat(event.target.value))
  const [items, setItems] = useState([]);


  const buttonClicked = () => {
    if (userInput !== "") {
      setItems(items.concat(userInput));
      setUserInput("");
    }
  };

  const checkBoxClicked = (event) => {
    let task = document.getElementById(event.target.id)
    let textElement = task.previousElementSibling;

    if (task.checked == true) {
      textElement.classList.add("line-through");

    }
    else {
      textElement.classList.remove("line-through");
    }
  }

  const deleteTask = (event) => {
    event.target.parentElement.remove();
  }
  
  return (

    <div className="App">
      {/* {console.log(checked, 'checked')} */}
      <form className="mt-20 mb-44" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="toDoItem">Add toDo: </label>
        {/* Controlled Component: */}
        <input
          className="border border-black rounded"
          onChange={inputChange}
          value={userInput}
          type="text"
          id="toDoItem"
          name="toDoItem"
        />
        <button className="bg-yellow-500 px-2 rounded ml-2" onClick={buttonClicked}>Add</button>
      </form>
      {items.map((item,index) => {
        return (
          <>
            <ul key={index} className="">
              <li className="flex items-center justify-center space-x-3">
                <div>{item}</div>
                <input type="checkbox" id={index}
                  onChange={checkBoxClicked} />
                <button onClick={deleteTask}>delete</button>
              </li>
            </ul>
          </>
        );
      })}
    </div>
  );
}

// React rule: all elements
// must be terminated with a slash /
// <tag></tag>
// <tag />
// !!! NOT: <tag>

// `class` HTML attr becomes `className` in React
// `for` HTML attr becomes `htmlFor` in React
