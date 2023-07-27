/* after importing, we can use the components as regular html elements */
import React from "react";

function ListGroup1() {
  /**Render a list of items dynamically */
  let items = ["New York", "San Francisco", "Tokyo", "London", "Rome"];

  /**JS arrays have the map() method, for mapping or converting each item to an item of a different type. JSX don't support for loops, so to cycle over each item and render the data dynamically we use the map method. */

  /**In a React component we cannot return more than 1 element. To overcome this problem, we can wrap the entire return expression inside a <div> or another element, or even better we can use Fragments(<></>) */

  // Event handler
  const handleClick = (event: React.MouseEvent) =>
    console.log("Clicked:", event);

  return (
    <>
      {/**Fragment */}
      <h1>List</h1>
      {/*We can  move the logic below inside a function outside the return, and call the function inside the return. The benefits of using a function are that we can pass parameters. */}
      {/*items.length === 0 ? <p>No item found</p> : null*/}
      {/* if true ..., otherwise nothing will be rendered(from this condition). 
      A better way to write it: */}
      {items.length === 0 && <p>No item found</p>}
      {/* if(items.length === 0) is true, <p>No item found</p> will be rendered, otherwise nothing will be rendered.*/}
      <ul className="list-group">
        {/* When rendering a list of itemes using the map method, each child/item in a list should have a unique "key" property that uniquely identifies the item. React need this key to keep track of the item, so when we add or remove items dynamically, React knows which part of the page should be updated.   
        In our case, since each item is a uniqe string so we can use the item itself as a unique key, but in a real world application each item has a property "ID". */}

        {items.map((item, index) => (
          <li
            className={
              "list-group-item"
            } /* "list-group-item" is a bootstrap class.*/
            key={item}
            /* In React each item has a proprety called "onClick"*/
            //onClick={(event) => console.log("Clicked: " + item, index, event)}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup1;
