import React, { useState } from "react";
import Items from "./Items";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Task Tracker</h1>
        <div>
          <p>Task tracking made easy!</p>
        </div>
      </div>
      <div className="heading">
        <p>Click on task after completion</p>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => (
            <Items
              text={todoItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
