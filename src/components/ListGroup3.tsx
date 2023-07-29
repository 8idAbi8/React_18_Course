import React, { useState } from "react";

/* Passing data and functions via Props, improves component reusability */

/**Props are the inputs or arguments passed to our components. We should tread Props as immutable.
 * First we need to decide the shape of the input to this component: in our case we want to pass on object with 2 properties: 
{ itemes: [], heading: string }. To that we use the TS interface: */

/**Passing Functions via Props:
 * We don't want to insert the logic of the function inside the component, to preserve its reusability.
 * So we need a mechanism to notify the consumer or the parent of this component that an item is selected.
 * To implement this, we need to add a function as a proprety in the interface */
/**The props interface must be defined within the component that uses it. */
interface Props {
  items: string[];
  heading: string;
  // function property
  onSelectItem: (item: string) => void;
}

/**Render a list of items dynamically */
function ListGroup3({ items, heading, onSelectItem }: Props) {
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
              setSelectedIndex(index); // on click, activates the item with the selected index
              onSelectItem(item); // on click, -> handleSelectItem
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
