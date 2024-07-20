import { useState } from "react";
import "./App.css";
import { ItemsContanier } from "./components/ItemsContanier";
import Lula from "./components/AddElement";

function App() {
  const [Task, Settask] = useState(["lucas", "feijão", "felipe"]);
  let removefromlist = (item) => {
    const newlist = [...Task];

    let index = newlist.indexOf(item);
    newlist.splice(index, 1);
    Settask(newlist);
  };
  const AddElement = (dado) => {
    if (Task.includes(dado)) {
      alert("esse elemento ja existe na lista");
    } else {
      Settask([...Task, dado]);
    }
  };

  return (
    <>
      <h1>Make your own to do list</h1>
      <Lula add={AddElement} />
      <ItemsContanier ArrayList={Task} remove={removefromlist} />
    </>
  );
}

export default App;
