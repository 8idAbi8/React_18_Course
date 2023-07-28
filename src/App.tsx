import ListGroup1 from "./components/ListGroup1";
import ListGroup2 from "./components/ListGroup2";
import ListGroup3 from "./components/ListGroup3";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Rome"];

  return (
    <div>
      <ListGroup3 items={items} heading="Cities" />
    </div>
  );
}

export default App;
