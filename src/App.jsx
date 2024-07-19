import "./App.css";
import { ItemsContanier } from "./components/ItemsContanier";

function App() {
  return (
    <>
      <h1>Make your own to do list</h1>
      <ItemsContanier ArrayList={["lucas", "feijão"]} />
    </>
  );
}

export default App;
