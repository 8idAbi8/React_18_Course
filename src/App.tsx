import ListGroup1 from "./components/ListGroup1";
import ListGroup2 from "./components/ListGroup2";
import ListGroup3 from "./components/ListGroup3";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Rome"];

  /**La funzione handleSelectItem viene passata dal componente App al componente ListGroup3 come una prop, ma viene eseguita all'interno del componente App. */
  const handleSelectItem = (item: string) => {
    console.log("Selected: " + item);
  };

  return (
    <div>
      <ListGroup3
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
