import ComponentA from "./components/ComponentA";
import { useCountContext } from "./context/CountContext";
import "./App.css";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
function App() {
  const { count } = useCountContext(); // Fixed: Accessing primitive `count` directly

  return (
    <>
      <h1>The count is on {count}</h1>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </>
  );
}

export default App;
