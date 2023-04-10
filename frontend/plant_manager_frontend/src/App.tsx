import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New york", "Paris", "Hamburg", "Berlin"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="alert alert-primary">
      <Alert>
        Hello <h1>World</h1>
      </Alert>
    </div>
  );
}

export default App;
