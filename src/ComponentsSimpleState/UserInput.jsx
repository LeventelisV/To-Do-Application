import React from "react";
import { v4 as uuidv4 } from "uuid";

export default class UserInput extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
  }

  inputChange = (event) => {
    this.setState({
        userInput: event.target.value
    })
  }

  buttonClicked = () => {
    if (this.userInput !== "") {
      let uid = uuidv4();
      let item = { id: uid, name: this.state.userInput, done: false };
      this.props.setItems([item, ...this.props.items]);
      this.setState({
        userInput: ""
    })
    }
  }

  render() {
    return (
      <>
        <form
          className="mt-20 mb-44 text-center"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="toDoItem">Add toDo:</label>
          <input
            className="border border-black rounded"
            onChange={this.inputChange}
            value={this.state.userInput}
            type="text"
            id="toDoItem"
            aria-label="user-input"
            name="toDoItem"
          />
          <button
            className="bg-yellow-500 px-2 rounded ml-2"
            onClick={this.buttonClicked}
          >
            Add
          </button>
        </form>
      </>
    );
  }
}
