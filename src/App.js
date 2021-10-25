import './App.css';
import {HideHeader} from "./components/HideHeader";
import {Todos} from "./components/Todos";

function App() {
  return (
    <div className="App">
      <HideHeader/>
      <Todos/>
    </div>
  );
}

export default App;
