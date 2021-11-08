import './App.css';
import {HideHeader} from "./components/task1/HideHeader";
import {Todos} from "./components/task1/Todos";
import {HideComponents} from "./components/task2/HideComponents";

function App() {
  return (
    <div className="App">
      <HideHeader/>
      <Todos/>
      <HideComponents/>
    </div>
  );
}

export default App;
