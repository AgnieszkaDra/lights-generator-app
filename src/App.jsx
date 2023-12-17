import "./App.css";
// eslint-disable-next-line no-unused-vars
import { Counter } from "./components/Counter";
import { useState } from "react";
import { Text } from "./components/Text";
import { SingleLight } from "./components/SingleLight";
import { Grid } from "./components/Grid";

function App() {
  const [rows, setRows] = useState(0)
  const [columns, setColumns] = useState(0)

  const handleIncrementRow = () => {
      setRows(rows + 1)
  }

  const handleDecrementRow = () => {
      if(rows <= 0) {
          return
      }
      setRows(rows - 1)
  }

  const handleIncrementColumn = () => {
    if(columns >= 9) {
      return
    }
    setColumns(columns + 1)
}

const handleDecrementColumn = () => {
    if(columns <= 0) {
        return
    }
    setColumns(columns - 1)
}

const totalLights = rows * columns
const lights = Array.from({length:totalLights})
// const lights2 = [...lights]


  return (
    <div className="wrapper">
      <nav className="nav">
        <Text>{totalLights} bulbs</Text>
        <Counter text={'rows'} onIncrement ={handleIncrementRow} onDecrement={handleDecrementRow} count={rows}/>
        <Counter text={'columns'} onIncrement ={handleIncrementColumn} onDecrement={handleDecrementColumn} count={columns}/>
      </nav>
      <Grid columns={columns}>
         {lights.map((value, idx) => {
          return <SingleLight key={idx}></SingleLight>
        })}
      </Grid>
    </div>
  )
}

export default App;
