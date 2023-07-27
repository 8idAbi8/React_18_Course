import React, { useState } from "react";

/**Render a list of items dynamically */
function ListGroup2() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Rome"];

  //let selectedIndex = -1; // -1: no item is selected  // index for keeping track of the selected item
  /* a variable with local visibility to the function component, React can't see/use it.
  To solve this problem we use the React State hook, a built-in function that tells React that we are saving data that might change over time */
  const [selectedIndex, setSelectedIndex] = useState(-1);
  /* Returns a stateful value (selectedIndex), and a function to update it.
  arr[0]; // variable,   arr[1]; // updater function */

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            //className="list-group-item active"
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup2;
