import React, { useState } from "react";

/* Passing Data via Props (propreties), Reusable component */

/**Props are the inputs to our components. First we need to decide the shape of the input to this component: in our case we want to pass on object with 2 properties: 
{ itemes: [], heading: string }. To that we use the TS interface: */
interface Props {
  items: string[];
  heading: string;
}

/**Render a list of items dynamically */
function ListGroup3({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  /* Returns a stateful value (selectedIndex), and a function to update it.*/

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
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

export default ListGroup3;
