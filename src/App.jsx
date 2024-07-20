import { useState } from "react";
import "./App.css";
import { ItemsContanier } from "./components/ItemsContanier";

function App() {
  const [Task, Settask] = useState(["lucas", "feijão", "felipe"]);
  let removefromlist = (item) => {
    const newlist = [...Task];

    let index = newlist.indexOf(item);
    newlist.splice(index, 1);
    Settask(newlist);
  };

  return (
    <>
      <h1>Make your own to do list</h1>
      <ItemsContanier ArrayList={Task} remove={removefromlist} />
    </>
  );
}

export default App;
