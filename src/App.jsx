import "./App.css";
// eslint-disable-next-line no-unused-vars
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="wrapper">
      <nav className="nav">
        <p className="counter">0 bulbs</p>
        <Counter text={'rows'} count={0}/>
        <Counter text={'columns'} count={0}/>
      </nav>
    </div>
  )
}

export default App;
