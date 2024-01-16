import { useState } from "react";
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  function increment(){
    return setCount(count + 1)
  }
  function decrement(){
    return setCount(count - 1)
  }
  return ( 
    <div className="container">
      <div>
        the count is {count}
      </div>
      <div>
      <button onClick={increment} className="button-33">
        Increment
      </button>
      <button onClick={decrement} className="button-26">
        Decrement
      </button>
      </div>
    </div>
   );
}

export default App;