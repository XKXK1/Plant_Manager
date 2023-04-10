import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
 const [alertVisible, setAlertVisibility]= useState(false)
 

  return (
    <div>
      {alertVisible && <Alert>My Alert</Alert>}
      <Button color="primary" children="My Button" onClick={ () => setAlertVisibility(!alertVisible)}/>
    </div>
  );
}

export default App;
